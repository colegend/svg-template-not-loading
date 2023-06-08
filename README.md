# SVG sometimes not loading
Angular svg viewBox issue leading to svg content sometimes being read and sometimes not.


## Reproduction

Steps to reproduce:
1. Install the requirements: `npm i`.
2. Start the development server: `ng serve`.
3. Go to: http://localhost:4200/home.
4. Refresh (aka reload) the page a couple of times.

Sometimes it will show a circle (zoomed in via viewBox).
And sometimes it will show nothing as the svg did not "load".

This can also be seen in the console.
If it worked it outputs something like: `SVGRect {x: 50, y: 25, width: 100, height: 100}`
If it did not load it will instead show: `SVGRect {x: 0, y: 0, width: 0, height: 0}`


## Output

These are the two possible results...

**Worked:**
![SVG loading worked](screenshots/success.png?raw=true "SVG loading worked")
**Failed:**
![SVG loading failed](screenshots/fail.png?raw=true "SVG loading failed")


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/colegend/svg-template-not-loading/tree/main)
