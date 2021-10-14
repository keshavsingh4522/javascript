<script>
 
       // JavaScript program for the above
       // approach using Set
 
       function getUnion(a, n, b, m) {
 
           // Defining set container s
           var s = new Set();
 
           // Inserting array elements in s
           for (let i = 0; i < n; i++)
               s.add(a[i]);
 
           for (let i = 0; i < m; i++)
               s.add(b[i]);
           document.write(
           "Number of elements after union operation: "
           + s.size + "<br>");
           document.write("The union set of both arrays is :");
           document.write("<br>");
           var arr = [];
           for (let itr of s)
               arr.push(itr);
           // s will contain only distinct
           // elements from array a and b
           arr.sort(function (a, b) { return a - b; })
           for (let i = 0; i < arr.length; i++) {
               document.write(arr[i] + " ");
           }
       }
 
       // Driver Code
 
       let a = [1, 2, 5, 6, 2, 3, 5, 7, 3];
       let b = [2, 4, 5, 6, 8, 9, 4, 6, 5, 4];
 
       getUnion(a, 9, b, 10);
 
    // This code is contributed by Potta Lokesh
 
 
   </script>
