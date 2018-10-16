# Sorting Algorithms in JavaScript

Sorting algorithms are incredibly common tasks. And there are many different sorting
techniques. So itt is good to their own advantages and disadvantages.
And some of them perform slow or fast depends on the given input:
For instance, _insertion sort_ is slow for random array, but fast when the array
is almost sorted.

## Basic Sorting Algorithms (usually slow, but good to understand how they work)
These three algorithms are roughly same. They works find on small size of array.  
- Bubble sort  
  _First sort the largest element to the end of the array._
- Selection sort  
  _First sort the smallest element to the beginning of the array._
- Insertion sort  
  _Builds up the sort by gradually creating a larger left half which is always sorted._

| Basic Sorting Algorithms | Time Complexity (Best)| Time Complexity (Average)| Time Complexity (Worst)|Space Complexity|
| ------------------------ | ----------------------| -------------------------|------------------------|----------------|
| Bubble Sort              | O(n)                  |      O(n^2)              |     O(n^2)             | O(1)           |
| Insertion Sort           | O(n)                  |      O(n^2)              |     O(n^2)             | O(1)           |
| Selection Sort           | O(n^2)                |      O(n^2)              |     O(n^2)             | O(1)           |
Remember we care about the worst case which is Big O about. From the table, these 
three basic sorting algorithms have same Big O as O(n^2) for time complexity and O(1) 
for space complexity. The constant space complexity means that no matter what size 
of input array, there are constant number of variables defined. But advanced
algorithms usually uses more *space* to speed up their performance. 

## Intermediate Sorting Algorithms (less intuitive to write the code)
They works find fine on big size of array like an array of 100000 elements. 
- Quick sort
- Merge sort
- Radix sort

## Comparing different sorting algorithms
* Those basic sorting algorithms (*bubble sort*, *selection sort* and *insertion sort*) 
are usually slow, but not bad choice when comes to small size of input array since they 
works even better than those complex ones (*merge sort*, *quick sort*, *heap sort*, etc.).  
* For nearly sorted array, **Optimized Bubble Sort** and **Insertion Sort** seems fine.  
**Insertion Sort** can work with live stream data as it just keep sorting out the new data. 

Sorting algorithms can work on other different data types such as _Object_ and _Array_.

#### References

- https://github.com/benoitvallon/computer-science-in-javascript/tree/master/sorting-algorithms-in-javascript
