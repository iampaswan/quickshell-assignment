function Order(items, parameter) {
    if(parameter === 'title') {
        items.sort((a, b) => {
            a = a.title.toLowerCase();
            b = b.title.toLowerCase();
        
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });
    }
    else if(parameter === 'priority') {
        items.sort((a, b) => {
            return b.priority - a.priority;
        });
    }
  return items;
}

export default Order