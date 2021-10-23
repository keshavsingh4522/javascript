          HTML Table
HTML table tag is used to display data in tabular form (row * column). There can be many columns in a row.

We can create a table to display data in tabular form, using <table> element, with the help of <tr> , <td>, and <th> elements.

In Each table, table row is defined by <tr> tag, table header is defined by <th>, and table data is defined by <td> tags.

HTML tables are used to manage the layout of the page e.g. header section, navigation bar, body content, footer section etc. But it is recommended to use div tag over table to manage the layout of the page .


HTML Table Tags
Tag	Description
<table>	It defines a table.
<tr>	It defines a row in a table.
<th>	It defines a header cell in a table.
<td>	It defines a cell in a table.
<caption>	It defines the table caption.
<colgroup>	It specifies a group of one or more columns in a table for formatting.
<col>	It is used with <colgroup> element to specify column properties for each column.
<tbody>	It is used to group the body content in a table.
<thead>	It is used to group the header content in a table.
<tfooter>	It is used to group the footer content in a table.
HTML Table Example
Let's see the example of HTML table tag. It output is shown above.

<table>  
<tr><th>First_Name</th><th>Last_Name</th><th>Marks</th></tr>  
<tr><td>Sonoo</td><td>Jaiswal</td><td>60</td></tr>  
<tr><td>James</td><td>William</td><td>80</td></tr>  
<tr><td>Swati</td><td>Sironi</td><td>82</td></tr>  
<tr><td>Chetna</td><td>Singh</td><td>72</td></tr>  
</table>  
Test it Now
Output:

First_Name	Last_Name	Marks
Manish
Kumar
60
Ankit
Gupta
80
Manisha
singh
82
Akash
Singh
72
In the above html table, there are 5 rows and 3 columns = 5 * 3 = 15 values.


 
HTML Table with Border
There are two ways to specify border for HTML tables.

By border attribute of table in HTML
By border property in CSS
1) HTML Border attribute
You can use border attribute of table tag in HTML to specify border. But it is not recommended now.

<table border="1">  
<tr><th>First_Name</th><th>Last_Name</th><th>Marks</th></tr>  
<tr><td>Sonoo</td><td>Kumar</td><td>60</td></tr>  
<tr><td>James</td><td>Gupta</td><td>80</td></tr>  
<tr><td>Swati</td><td>singh</td><td>82</td></tr>  
<tr><td>Chetna</td><td>Singh</td><td>72</td></tr>  
</table>  
Test it Now
Output:

First_Name	Last_Name	Marks
Manish
kumar
60
Ankit
Gupta
80
Manish
singh
82
Akash
Singh
72
2) CSS Border property
It is now recommended to use border property of CSS to specify border in table.

<style>  
table, th, td {  
  border: 1px solid black;  
}  
</style>  
Test it Now
You can collapse all the borders in one border by border-collapse property. It will collapse the border into one.


<style>  
table, th, td {  
  border: 2px solid black;  
  border-collapse: collapse;  
}  
</style>  
Test it Now
Output:

Name	Last Name	Marks
Manish
Kumar
60
Ankit
Gupta
80
Manisha
singh
82
Akash
Singh
72
HTML Table with cell padding
You can specify padding for table header and table data by two ways:

By cellpadding attribute of table in HTML
By padding property in CSS
The cellpadding attribute of HTML table tag is obselete now. It is recommended to use CSS. So let's see the code of CSS.

<style>  
table, th, td {  
  border: 1px solid pink;  
  border-collapse: collapse;  
}  
th, td {  
  padding: 10px;  
}  
</style>  
Test it Now
Output:

Name	Last Name	Marks
Manish
Kumar
60
Ankit
Gupta
80
Manisha
singh
82
Akash
Singh
72
HTML Table width:
We can specify the HTML table width using the CSS width property. It can be specify in pixels or percentage.


We can adjust our table width as per our requirement. Following is the example to display table with width.

table{  
     width: 100%;   
    }  
Example:
<!DOCTYPE html>  
<html>  
<head>  
    <title>table</title>  
    <style>  
        table{  
            border-collapse: collapse;  
            width: 100%;   
        }  
    th,td{  
        border: 2px solid green;   
        padding: 15px;  
    }  
               
    </style>  
  </head>  
<body>  
  <table>  
    <tr>  
        <th>1 header</th>  
        <th>1 header</th>  
        <th>1 header</th>  
    </tr>  
    <tr>  
        <td>1data</td>  
        <td>1data</td>  
        <td>1data</td>  
    </tr>  
    <tr>  
        <td>2 data</td>  
        <td>2 data</td>  
        <td>2 data</td>  
    </tr>  
    <tr>  
        <td>3 data</td>  
        <td>3 data</td>  
        <td>3 data</td>  
    </tr>  
</table>  
</body>  
</html>  
Test it Now
Output:

html table width
HTML Table with colspan
If you want to make a cell span more than one column, you can use the colspan attribute.


It will divide one cell/row into multiple columns, and the number of columns depend on the value of colspan attribute.

Let's see the example that span two columns.

CSS code:

<style>  
table, th, td {  
  border: 1px solid black;  
  border-collapse: collapse;  
}  
th, td {  
  padding: 5px;  
}  
</style>  
HTML code:

<table style="width:100%">  
  <tr>  
  <th>Name</th>  
  <th colspan="2">Mobile No.</th>  
  </tr>  
  <tr>  
  <td>Ajeet Maurya</td>  
  <td>7503520801</td>  
  <td>9555879135</td>  
  </tr>  
</table>  
Test it Now
Output:

Name	Mobile No.
Ajeet Maurya
7503520801
9555879135
HTML Table with rowspan
If you want to make a cell span more than one row, you can use the rowspan attribute.

It will divide a cell into multiple rows. The number of divided rows will depend on rowspan values.

Let's see the example that span two rows.

CSS code:


<style>  
table, th, td {  
  border: 1px solid black;  
  border-collapse: collapse;  
}  
th, td {  
  padding: 10px;  
}  
</style>  
HTML code:

<table>    
<tr><th>Name</th><td>Ajeet Maurya</td></tr>    
<tr><th rowspan="2">Mobile No.</th><td>7503520801</td></tr>    
<tr><td>9555879135</td></tr>    
</table>   
Test it Now
Output:

Name
Ajeet Maurya
Mobile No.
7503520801
9555879135
HTML table with caption
HTML caption is diplayed above the table. It must be used after table tag only.

<table>  
<caption>Student Records</caption>  
<tr><th>First_Name</th><th>Last_Name</th><th>Marks</th></tr>  
<tr><td>Vimal</td><td>Jaiswal</td><td>70</td></tr>  
<tr><td>Mike</td><td>Warn</td><td>60</td></tr>  
<tr><td>Shane</td><td>Warn</td><td>42</td></tr>  
<tr><td>Jai</td><td>Malhotra</td><td>62</td></tr>  
</table>  
Test it Now
Styling HTML table even and odd cells
CSS code:

<style>  
table, th, td {  
  border: 1px solid black;  
  border-collapse: collapse;  
}  
th, td {  
  padding: 10px;  
}  
table#alter tr:nth-child(even) {  
  background-color: #eee;  
}  
table#alter tr:nth-child(odd) {  
  background-color: #fff;  
}  
table#alter th {  
  color: white;  
  background-color: gray;  
}  
</style>  
Test it Now
Output:

html table even and odd
NOTE: You can also create various types of tables using different CSS properties in your table.
