export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
    const self = this;
    
    this.addNeighborhood = add(a) => {
      self.sanFranciscoNeighborhoods.push(a);
      return self.sanFranciscoNeighborhoods;
    };
  }