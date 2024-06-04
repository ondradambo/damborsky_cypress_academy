constructor(projectId = "") {
    super(`module=items/info&path=21-${projectId}`);
    this.projectNameDiv = ".portlet-title .caption";
    this.idDivXPath = '//th[text()="Status"]/..//div';
    this.startDateTdXPath = '//th[text()="Start Date"]/../td';
    this.dateAddedTdXPath = '//th[text()="Date Added"]/../td';
    this.createdBySpanXPath = '//th[text()="Created By"]/..//span';
    this.statusDivXpath = '//th[text()="Status"]/..//div';
  }