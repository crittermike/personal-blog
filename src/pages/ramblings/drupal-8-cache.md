---
title: Drupal 8 Cache API examples cheat sheet
date: 2018-04-25
tags:
  - drupal
  - development
---

Here are some random useful snippets for dealing with caches in Drupal 8, just because I keep having to dig them up from the API.

I'll try to add more here as I go.

### Set an expiring cache item

```php
\Drupal::cache()->set('cache_key', 'cache_data', $expiration_timestamp);
```

### Set a permanent cache item

```php
\Drupal::cache()->set('cache_key', 'cache_data', CacheBackendInterface::CACHE_PERMANENT);
```

### Set a permanent cache item with tags

```php
\Drupal::cache()->set('cache_key', 'cache_data', CacheBackendInterface::CACHE_PERMANENT, array('tag_one', 'second_tag'));
```

### Fetch an item from the cache

```php
$cache = \Drupal::cache()->get('cache_key');
if (!empty($cache->data) {
  // Do something with $cache->data here.
}
```

(Note that in Drupal 8 you don't have to manually check to make sure the cache isn't expired, thanks to [this issue](https://www.drupal.org/node/1774332))

### Invalidate a cache item

```php
\Drupal::cache()->invalidate('cache_key');
```

### Invalidate multiple cache items

```php
\Drupal::cache()->invalidateMultiple($array_of_cache_ids);
```

### Invalidate specific cache tags

This one allows you to pass in an array of cache tags to invalidate manually.

```php
use Drupal\Core\Cache\Cache;

Cache::invalidateTags(['config:block.block.YOURBLOCKID', 'config:YOURMODULE.YOURCONFIG', 'node:YOURNID']);
```

**Note that the invalidation functions also exist for deleting caches, by just replacing `invalidate` with `delete`.**

### Flush the entire site cache

This one is still the same as Drupal 7.

```php
drupal_flush_all_caches();
```

The end!
