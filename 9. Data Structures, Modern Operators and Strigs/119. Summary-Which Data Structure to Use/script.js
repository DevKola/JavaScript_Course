// main sources of data:
/*
  1. From the programm itself: Data written directly in the source code(e.g status message)

  2. From the UI: Data input from the user or data written in the DOM (e.g task todo app, form details)

  3. From external sources: Data fetched for example from Web API(Application Programming Interface) (e.g recipe objects)


  After we collect these datas, we then store them in a data structure.
  // If we need just a simple list, we can make use of Arrays or Set
  // If you need key value pairs, we can make use of Objects or Maps

  // the only diference is that in Objects or Maps, we have a way of describing the values with a key, while in an Arrays or Set, we only have the values without  any description

  // Arrays VS. Sets
  1. Use arrays when you need ordered list of values (might contain duplicates)
    1. Use sets when you need to work with unique values. Use to remove duplicates from arrays.
  
  2. Use arrays when you need to manipulate data
    2. Use set when high performace is really important


  // Objects VS. Maps
  1. Object is the more traditional key/value pairs for DS. It is easy to write   and access with the . amd []
    1. Maps has better performance and their key can be of any data type. It is easy to iterate amd easy to compute it's size
  
  2. Objects are very suitables when you need to include functions(method). Also use Objects when working with JSON and then you (can convert them to map)
    2. Use Sets when you simpy need to map keys to values and use sets when you need keys thats are not only strings.

*/