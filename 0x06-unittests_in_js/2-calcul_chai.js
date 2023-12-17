function calculateNumber(type, a, b) {
    const roundA = Math.round(a);
    const roundB = Math.round(b);  
  
    if (type === 'SUM') {
      return roundA + roundB;
    }
  
    if (type === 'SUBTRACT') {
      return roundA - roundB;
    }
  
    if (type === 'DIVIDE') {
      if (b === 0) {
        const msg = 'Error';
        return msg;
      }
      return roundA / roundB;
    }
      
  }
    
module.exports = calculateNumber;