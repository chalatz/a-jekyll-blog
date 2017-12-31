# Things to know

## Tags

Please see the sample posts to get an idea on how to include multiple tags.

Now, in order to have pages that list posts per tag, you must add them manually.

These pages are inside the `tag` folder.

Each file has the same name as the tag.

In each of these files, you just change the value of the `tag_name` variable and the tag name at the beginning of the `for` loop.

### Tag names consisted of more than one word

If you want to use a tag name with more than one word, then the name of the file you must create, must have the name of the file [slugified](https://jekyllrb.com/docs/templates/#filters). In most cases, this will mean that the name is to be in lowercase and the spaces replaced by dashes. If you want to be sure, once you include the tag inside the post and save, the tag will appear in the tag cloud and in the post's tags list. If you hover over it, the slugified name will appear as the url.

For example, there is a tag named `just a tag`. Its slug is `just-a-tag`. So the file that needs to be created, is `tag/just-a-tag.html`. Please check this file to see how it's structured, especially the beginning of the `for` loop.

If your tag name is consisted of just one word, then the `for` loop can begin like in `tag/tag1.html`:

```liguid
{% for post in site.tags.tag1 %}
```

Or like this, as in `tag/tag2.html`:

```liquid
{% for post in site.tags['tag2'] %}
```

With a tag with more than one word, you **must** use the syntax as in `tag/just-a-tag.html`:

```liquid
{% for post in site.tags['just a tag'] %}
```

## Tag cloud

The tag cloud is generated automatically. If a tag has one post, then its name has a size of 1.1em. For two posts, its size is 1.2em, etc. This is configured in `_includes\tag-cloud.html`, in the line where the `font_size` variable is defined.

## The CV block

The block with the CV can be reused with the following command:

```liquid
{% include cv.html %}
```

This command includes the `_includes/cv.html` file, which in turn includes the `_includes/cv/xp.html` and `_includes/cv/skills.html`. Normally, you won't have to deal with these files.

In order to edit your CV tables, you do it via the `_data/cv.yml` file. Its structure is quite self explanatory.

By editing the `_data/cv.yml` file, the cv tables are generated automatically.

## The generic reusable block

This block that can be reused with the following command:

```liquid
{% include block.html %}
```

**HOWEVER**, if you want to edit the block, edit the `block.markdown` file! If you have a look at it, you can write both markdown and HTML.

It is advised not to edit `block.html`.