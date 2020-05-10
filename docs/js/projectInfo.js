function projectInfo(info, data, where, key) {
  return {
    info: info,
    data: data,
    where: where,
    key: key,
    selector: function() {
      return '.projects .' + this.info.id + ' ' + this.where;
    },
    add: function() {
      console.log(this.selector());
      $(this.selector()).html(this.markup());
    },
    validate: function () {
      throw 'You should not use projectInfo() directly, use a subclass such as ci()';
    },
    parse: function () {
      throw 'You should not use projectInfo() directly, use a subclass such as ci()';
    },
    markup: function() {
      if (this.data[key] == undefined) {
        return '<a href="' + this.info.projectinfo + '">.project-info/info.yml</a> is valid, but we could not find the key ' + this.key;
      }
      try {
        this.validate(this.data[key]);
        return this.parse(this.data[key]);
      }
      catch (err) {
        return '<a href="' + this.info.projectinfo + '">.project-info/info.yml</a> is valid and contains the ' + this.key + ' key, but the parser threw the error ' + err;
      }
    }
  }
}
