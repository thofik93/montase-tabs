# montase-tabs
simple tabs with elegant animation

### [Demo](https://thofik93.github.io/montase-tabs/)

## How to use:

Install via NPM:

```html
npm install montase-tabs
```

Make sure to include jQuery in your page:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
```

Include **jQuery Montase-Tabs:**

```html
<script src="js/montase-tabs.js"></script>
```

Include **jQuery Montase-Tabs** styles

```html
<link rel="stylesheet" href="css/montase-tabs.css">
```



# Example:

```html
<nav class="nav-tabs">
  <ul class="tabs-material">
    <li class="tabs-material__list active">
      <a href="#masterBedroom" class="regular" data-role="tabs-material">Master Bedroom</a>
    </li>
    <li class="tabs-material__list">
      <a href="#livingArea" class="regular" data-role="tabs-material">Living Area</a>
    </li>
    <li class="tabs-material__list">
      <a href="#kitchen" class="regular" data-role="tabs-material">Kitchen</a>
    </li>
  </ul>
  <div class="tabs-material-line"></div>
</nav>

<div class="tabs-material-content">
  
  <div class="tabs-material-item active" id="masterBedroom">
    <p>this is master bedroom.</p>
  </div>

  <div class="tabs-material-item" id="livingArea">
    <p>this is living area.</p>
  </div>

  <div class="tabs-material-item" id="kitchen">
    <p>this is kitchen.</p>
  </div>
</div>
```

