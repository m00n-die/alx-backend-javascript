export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;

  this.addNeighborhood = (a) => {
    self.sanFranciscoNeighborhoods.push(a);
    return self.sanFranciscoNeighborhoods;
  };
}
