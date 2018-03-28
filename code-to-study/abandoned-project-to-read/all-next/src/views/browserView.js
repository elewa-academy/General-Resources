class BrowserView extends View {
  constructor(template) {
    super(template);
  }

  render(name) {
    if (name !== undefined) {
      document.getElementById("display").textContent=this.template + ' ' + name;
      document.getElementById("db").textContent=JSON.stringify(this.db);
    } else {
      document.getElementById("display").textContent="that doesn't exist";
      document.getElementById("db").textContent=JSON.stringify(this.db);
    }  
  }
}

module.exports = BrowserView;