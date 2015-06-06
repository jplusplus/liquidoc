# liquidoc

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
   text.
3. Use the variables drop-down selector on the right to render the text according to the variable 
   you want to use.



[nytimes]: http://www.nytimes.com/interactive/2015/05/03/upshot/the-best-and-worst-places-to-grow-up-how-your-area-compares.html?abt=0002&abg=1)
[demo]: https://jplusplus.github.io/liquidoc/
