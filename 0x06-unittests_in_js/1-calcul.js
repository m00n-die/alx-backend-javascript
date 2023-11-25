function calculateNumber(type, a, b) {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }

    if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    }

    if (type === 'DIVIDE') {
      if (b === 0) {
        const msg = 'Error';
        return msg;
      }
      return Math.round(a) / Math.round(b);
    }
    
  }
  
module.exports = calculateNumber;