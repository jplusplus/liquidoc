## Liquidoc: A proposal for adaptive text in journalism

![enter image description here](https://i.imgur.com/dLTLqcG.jpg)

### Proposition

The New York Times published a [story][nytimes] that is tailored to a user's location, where many parts of the text are set according to this variable. Furthermore, users can pick other locations from a map and see how the article updates itself to show new information that's relevant to the selected place.

The challenge we decided to take in this hackathon is to come up with a simple framework to create articles that reshape themselves according to user-provided information, such as age, location, income, job sector or gender. This framework is targeted at journalists who are familiar with web technologies, but who don't work with code.

The project was made possible by the teamwork of J++ members Erik Willems, Jelle Kamsma, Leonard Wallentin, Pierre Romera and Ricardo Lafuente.

### The format

![Deciding before hacking](https://i.imgur.com/f0OYa7d.jpg)

Initially, we had to develop the content writing formats, by specifying the syntax to provide the templates and the data that feeds them.

#### Data

TSV was picked as a quick way to specify the source data. While the issue of multi-dimensional datasets came up, it was decided that the prototype would only support two-dimensional data sets (e.g. simple tables).

    country			unemployment_rate
    France			10.6
    United Kingdom	5.4
    Germany			4.7

#### Text

To provide a non-confusing syntax for users, Markdown was the elected format. It is complemented with a couple of additions in order to accomodate the reactive parts of the text, namely the `{{ variable }}` token syntax that's used in Underscore.js or Django.

    {{ country }} sports an unemployment rate of {{ unemployment_rate }}.

If a specific data-point is required in order to "hardcode" a specific value, while keeping it dependent on the data, the "pipe" syntax comes into play.

    France sports an unemployment rate of {{ France | unemployment_rate }}.

#### Text Expressions

An ideal feature to have would be support for conditional statements, or "if" clauses. This means that the author could define specific snippets of text following a condition, based on the value of a variable.

    The team {{ IF probability > 0.5 THEN "is likely to succeed" ELSE "will probably fail" }}.
 

### The prototype

For the prototype application, it was decided to come up with a straightforward UI that can apply template-based replacement operations based on the selected variable.

The layout is close to that of [StackEdit](http://stackedit.io), starting with a dual-pane setup featuring a text editor on the left, and a preview area on the right. Additionally, the left-pane is subdivided to open up space for the data view, where the CSV data can be placed and edited.

![enter image description here](https://i.imgur.com/hleEWom.jpg "UI sketch")

While Pierre hacked away at the main UI and program logic, Erik developed a smooth WYSIWYG interface to define inputs and conditions -- a rather desirable feature, given that the target audience for this app is journalists who aren't knowledgeable at coding. 

### Sample articles

Jelle and Leo set out to write a couple of demo articles: one based on employment and job satisfaction, and another around the likelihood of a specific job being replaced by robots.

### Demo!

A successful hackathon should end with a functional demo -- [meet Liquidoc](http://jplusplus.github.io/liquidoc)!

### Later challenges and next steps

Some next steps were identified:

* **internationalization**, particularly for applying plural forms that can adapt to any quantity that is supplied. This is a major challenge if we account the manifold ways in different languages to specify plural forms.
* **multi-dimensional data**, which is not trivial to specify in a simple table-based format, and raises further challenges that go beyond the scope of a day-long hackathon.

### References

* [The Upshot -- The Best and Worst Places to Grow Up: How Your Area Compares][nytimes], the story that caused the itch that Liquidoc was written to scratch.
* [ArchieML](http://archieml.org), a human way to write structured text developed by the NYT.
* [Tangle](http://worrydream.com/Tangle/), a JS library for documents that change according to set variables.
* [JSON Table Schema](http://dataprotocols.org/json-table-schema/), a proposal to specify the properties of individual fields on a CSV file: data types, field restrictions, etc.

[nytimes]: http://www.nytimes.com/interactive/2015/05/03/upshot/the-best-and-worst-places-to-grow-up-how-your-area-compares.html?abt=0002&abg=1)
