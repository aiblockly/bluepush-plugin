Blockly.Blocks['push_file'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("通过蓝牙发送文件");
    this.appendValueInput("path")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("文件路径");
    this.appendValueInput("name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("蓝牙设备名称");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#082567");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
var define_bluepush = function() {
    Blockly.Python.definitions_.bluepush = "import bluepush"
};

Blockly.Python['push_file'] = function(block) {
  var value_path = Blockly.Python.valueToCode(block, 'path', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'name', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  define_bluepush();
  var code = 'bluepush.sendfile(path='+value_path+',name='+value_name+')\n';
  return code;
};