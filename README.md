# ractive-hamburger
**ractive-hamburger** is a simple [Ractive](https://github.com/ractivejs/ractive) [component](http://docs.ractivejs.org/latest/components)


### Demo
![Hameburger Gif](http://i.imgur.com/n3bpKI2.gif)

Codepen link will be available at some point.


### Installation
`npm install ractive-hamburger`



### Project Integration
Set up **ractive-hamburger** like you would any other component.

```
Ractive.components[ "r-hamburger" ] = require( "ractive-hamburger" );
```

If not using modules, **ractive-hamburger** will expose a **`RactiveHamburger`** global.


### Usage

#### Basic
```
<r-hamburger />
```

#### With options

```
<r-hamburger
    size="75px"
    rounded="true"
    speed="slower"
    color="#EFEFEF" />
```

### Options
+ `size` [`50px`]
    + The square dimensions of the hamburger. Any valid CSS unit
+ `rounded` [`undefined`]
    + Round the corners of the hamburger "buns"
+ `color` [`#333`]
    + Color of the hamburger "buns"
+ `speed` [`undefined`] (`"faster"` | `"slower"`)
    + Speed of hamburger animation. Valid values are `faster` or `slower`.

### Events
+ `open`
    + Fired when the hamburger is in the 'open' or 'active' state.
+ `closed`
    + Fired when the hamburger is in the 'closed' or 'normal' state.

### Methods

+ `open()` => `undefined`
    + Open the hamburger. Triggers the `open` event
+ `close()` => `undefined`
    + Closes hamburger. Triggers `closed` event


### Testing
For now, I'm manually testing initial features and small additions. Test scripts will be a requirement before launching **v1.0.0**


### Contributing
Small project (and I'm new to writing public facing modules), so no preferences on contributions yet. PR's welcome, just name it something obvious.