class Node {

    //Node class constructor 
    constructor(tag, id, classes, children) {
      // Tag name of the node.
      this.tag = tag;
      // id of the node
      this.id = id;
      // Array of CSS class names (string) on this element.
      this.classes = classes;
      // Array of children nodes.
      this.children = children; // All children are of type Node
    }


    // Overriding toString method
    toString() {
      return this.id; 
    }
  

    //search function   
    search(selector) {

        // Performing DFS below

        // Check if Selector is valid
        if(!selector || selector === undefined){
            return "invalid selector";
        }
        
        // Declare variables

        // Set collection, no duplicates
        let resultSet = new Set();

        let currentNode  = "";

        // Array for nodes that are visited
        let nodesVisited = [];

        // Array for nodes that will be visited
        let nodesToVisit = [];

        // Push current object into the collection
        nodesToVisit.push(this);

        // Setting a parent node check (first node checker)
        let parentNode = 0;

        // Looping through the node...

        while(nodesToVisit.length != 0){
            let children = [];
            currentNode = nodesToVisit.pop();
        
            // Check whether currentNode was already visited?

            if(parentNode != 0 && nodesVisited.indexOf(currentNode.id) < 0){
                // If not visited, push it into nodeVisited Array
                nodesVisited.push(currentNode.id);

                // Loop thorugh all classes in current node..

                for (let i = 0; i <= currentNode.classes.length; i++) {

                    // Check if the selector is a class or a tag
                    // That is if "." is present or not....
                    let checker = ".";
                    if (selector.charAt(0) === checker 
                                && currentNode.classes[i] == selector.substr(1)) {
                            // Selector is a class                                    
                            resultSet.add(currentNode);
                      } else if (currentNode.tag == selector) {
                            // Selector is a tag
                            resultSet.add(currentNode);
                      }
                }
            }
            parentNode = 5;
            // Repeat for the children nodes
            children = currentNode.children;
            for (var i = 0; i < children.length; i++) {
              nodesToVisit.push(children[i]);
            }  
        }
        

        // Get the result array from the set
        let result = Array.from(resultSet);
        
        // For correct order, reverse  
        result = result.reverse();
        

        // Additional stuff : Getting just array of ids
        let resultIds = [];
        result.forEach(element => {
          resultIds.push(element+"");
        });

        return resultIds;
    }

  
  }
/*
  function searchForTag(value, node) {
      
    
     if (node.tag === value) { 
        return node;
      }
    
      var len = node.children.length;
    
      for (var i = 0; i < len; i++) {
        var foundNode = searchForTag(value, node.children[i]);
        if (foundNode) {
            return foundNode;
        }
      }
    return null;
}
*/
    //Creating Tree..
    let span1 = new Node("span","span-1",["note"],[]);
    let span2 = new Node("span", "span-2",[],[]);
    let span4 = new Node("span","span-4",["mania"],[]);
    let span5 = new Node("span","span-5",["note","mania"],[]);
    let label = new Node("label","lbl-1",[],[]);
    let sec1Node = new Node("section","sec-1",[],[label]);
    let span3 = new Node("span","span-3",["sub1-span3"],[]);
    let para1 = new Node("p","para-1",["sub1-p1" ,"note"],[]);
    let divNode2 = new Node("div","div-2", ["subContainer1"], [span3, para1]);
    let divNode3 = new Node("div","div-3",["subContainer2"],[sec1Node]);
    let divNode4 = new Node("div","div-4",[],[span4,span5]);
    let divNode1 = new Node("div","div-1",["mainContainer"],[span1,span2,divNode2,divNode3,divNode4]);
    let randomspan6 = new Node("span","span-6",["randomSpan"],[]);
    let bodyNode = new Node("body","content",[],[divNode1,randomspan6]);
  
// Testing 

console.log("Started...");

// Test case 1 -
console.log("###################### Test Case 1 ######################");
console.log(divNode1.search("span"));
console.log("=====================================================================");
console.log("");

// Test case 2 -
 console.log("###################### Test Case 2 ######################");
console.log(divNode1.search(".note"));
console.log("=====================================================================");
console.log("");

// Test case 3 -
 console.log("###################### Test Case 3 ######################");
console.log(divNode1.search("label"));
console.log("=====================================================================");
console.log("");

// Test case 4 -
console.log("###################### Test Case 4 ######################");
console.log(para1.search(".note"));
console.log("=====================================================================");
console.log("");

// Test case 5 -
console.log("###################### Test Case 5 ######################");
console.log(divNode1.search("div"));
console.log("=====================================================================");
console.log("");

// Test case 6 -
console.log("###################### Test Case 6 ######################");
console.log(randomspan6.search("div"));
console.log("=====================================================================");
console.log("");

// Test case 7 -
console.log("###################### Test Case 7 ######################");
console.log(divNode2.search("section"));
console.log("=====================================================================");
console.log("");

// Test case 8 -
console.log("###################### Test Case 8 ######################");
console.log(bodyNode.search());
// Error conditions need to be handled
// invalid input need to be handled
console.log("=====================================================================");
console.log("");

// Test case 9 -
console.log("###################### Test Case 9 ######################");
console.log(bodyNode.search("section"));
console.log("=====================================================================");
console.log("");

// Test case 10 -
console.log("###################### Test Case 10 ######################");
console.log(divNode1.search(".randomSpan"));
console.log("=====================================================================");
console.log("");