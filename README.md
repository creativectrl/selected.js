# selected.js

A light weight library that extends the default functionality of html select fields. In essence, this library enables you to _*prevent duplicate selections of the same option value across multiple select fields*_.

Usage:
After uploading the package, simply include the plugin and specify a parent container and a selector in the options below:

```
<script type="text/javascript" src="/path/to/selected.min.js" /></script>

<script type="text/javascript">
	var selected = new selected({
		container : '.data-table',
		selector : '.priority',
		options : [1,2,3,4]
	});
</script>
```
