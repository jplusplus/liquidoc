![Liquidoc](https://raw.githubusercontent.com/jplusplus/liquidoc/master/logo/liquidoc-logo-300px.png?token=AAJwfNP_oR0XF5E4sS9QJjo9yG4kFm35ks5VfFawwA%3D%3D)

Liquidoc is an application to facilitate the creation of adaptive text. It's inspired 
by the [New York Times experiment][nytimes] with location-aware articles which shape themselves 
according to the user's location.

The current version is a proof-of-concept of a more general interface to create texts which change
and adapt to user provided variables. It was born at the J++ summit hackathon in June 2015,
Stockholm.


## Demo

There is a working demo of the interface [here][demo].


## How to use the application

1. Provide the **dataset** that will serve as a base for your article. It should be in the TSV 
   (Tab Separated Values) format; the simplest way to get this is to copy-paste the data cells from 
   LibreOffice, OpenOffice or Excel.
2. Write the **template** for your article, using the interface at the top to place variables 
   directly, or introduce conditional statements that will check the data to determine the final 
   text. (Usage hint: [Angular filters](https://docs.angularjs.org/guide/filter) are supported!)
3. Use the variables drop-down selector on the right to render the text according to the variable 
   you want to use.


## Authors

* Interface design and coding: Erik Willems, Pierre Romera
* Example articles and testing: Jelle Kamsma, Leonard Wallentin
* Documentation: Ricardo Lafuente


## License

The Liquidoc application code is licensed under the MIT license.

Copyright (c) 2015 Journalism++

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


[nytimes]: http://www.nytimes.com/interactive/2015/05/03/upshot/the-best-and-worst-places-to-grow-up-how-your-area-compares.html?abt=0002&abg=1)
[demo]: https://jplusplus.github.io/liquidoc/
