---
templateKey: blog-post
title: Exporting and importing big Drupal databases
date: 2017-01-23
description: Because Drupal databases are large and in charge.
tags:
  - development
  - drupal
---

"Once your site's database dump file gets to be 1GB or more, phrases like ""oh, just download and import a DB dump"" can't really be taken for granted anymore. So here are some tips for dealing with large databases, especially those of the Drupal variety.

Exporting
---------

Before we can import, we must export. With a big DB, you don't want to just do a regular old mysqldump > outfile.sql and call it a day. Here are some tips.

### Find the size before exporting

It can sometimes be useful to see how big the export is going to be before you actually export anything. That way, you can know ahead of time if you need to be doing this or that to reduce the size, or if it won't matter since the whole thing won't be that big anyway.

Here's a query you can run to see the size per DB table:

```sql
SELECT
  TABLE_SCHEMA,
  TABLE_NAME,
  DATA_LENGTH / POWER(1024,1) Data_KB,
  DATA_LENGTH / POWER(1024,2) Data_MB,
  DATA_LENGTH / POWER(1024,3) Data_GB
FROM information_schema.tables 
WHERE table_schema NOT IN 
  ('information_schema','performance_schema','mysql') 
ORDER BY DATA_LENGTH;
```

And here's another query you can run to see what the total size for the entire DB is: 

```sql
SELECT
    Data_BB / POWER(1024,1) Data_KB,
    Data_BB / POWER(1024,2) Data_MB,
    Data_BB / POWER(1024,3) Data_GB
FROM (SELECT SUM(data_length) 
  Data_BB FROM information_schema.tables
WHERE table_schema NOT IN 
  ('information_schema','performance_schema','mysql'));
```

### Dump without unnecessary data

For those cases where you need the database _structure_ for all of the tables, but you don't need the _data_ for all of them, here's a technique you can use. This will grab the entire DB structure, but lets you exclude data for any tables that you want. For example, search\_index, cache\_*, or sessions tables will be good places to cut out some fat.

```bash
# First we export the table structure.
mysqldump --no-data database_name > /export.sql
```

Just replace ""table\_name1"" and ""table\_name2"" with the tables that you want to skip, and you're golden. Also note that you can use the % character as a wildcard, so for example, you could ignore ""cache%"" for all cache tables.

After you do that, you'll have a single export.sql file that contains the DB structure for all tables and the DB data for all tables except the ones you excluded. Then, you'll probably want to compress it...

### Compress all the things

This one may go without saying, but if you're not compressing your database dumps then either they're really tiny, or you're dumber than a dummy. 

```bash
drush sql-dump --gzip --result-file=db.sql
```

Compare that with the regular old:

```bash
drush sql-dump --result-file=db.sql
```

...and you're going to see a huge difference.

Or if you already have the SQL dump that you need to compress, you can compress the file directly using:

```bash
gzip -v db.sql
```

That will output a db.sql.gz file for you.

Importing
---------

Now you have a nice clean compressed DB dump with everything you need and nothing you don't, and you're ready to import. Here are a few ways to ease the pain.

### Import a compressed dump directly

Instead of having to decompress the dump before importing, you can do it inline:

```bash
drush sqlq --file=db.sql.gz
```

Note that --file supports both compressed and uncompressed files.

### Exclude data when importing

If you receive a DB dump that has a lot of data you don't need (caches, sessions, search index, etc.), then you can just ignore that stuff when importing it as well. Here's a little one-liner for this:

```bash
gunzip -c db.sql.gz
     | grep -Ev ""^INSERT INTO \`(cache_|search_index|sessions)""
     | drush sqlc
```

What this is doing is using ""grep"" as a middleman and saying ""skip any lines that are insertion lines for these specific tables we don't care about"". You can edit what's in the parenthesis to add/remove tables as needed.

### Monitor import progress

There's nothing worse than just sitting and waiting and having no idea how far along the import has made it. Monitoring progress makes a long import seem faster, because there's no wondering. 

If you have the ability to install it (from Homebrew or apt-get or whatever), the ""pv"" (Pipe Viewer) command is great here:

```bash
pv db.sql | drush sqlc
```

Or if your database is compressed:

```bash
pv db.sql.gz | gunzip | drush sqlc
```

Using ""pv"" will show you a progress bar and a completion percentage. It's pretty awesome.

If you don't have ""pv"" then you can settle for the poor man's version:

```bash
watch ""mysql database_name -Be 'SHOW TABLES' | tail -n2""
```

That slick little guy will show you the table that is currently importing, and auto-updates as it runs, so you can at least see how far through the table list it has gone.

Tools and Resource
------------------

In this post I tried to focus on commands that everyone already has. If this just isn't cutting it for you, then look into these tools which could help even more:

*   [SyncDB](https://www.drupal.org/project/syncdb) \- a couple Drush commands that split DB dumps into separate files and import them in parallel, drastically speeding things up
*   [Drush SQL Sync Pipe](https://www.drupal.org/project/drush_sql_sync_pipe) \- an alternative to ""drush sql-sync"" that uses pipes where possible to speed things up"