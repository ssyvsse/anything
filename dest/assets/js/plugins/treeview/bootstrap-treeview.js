!function($,window,document,undefined){"use strict";var Tree=function(element,options){this.$element=$(element),this._element=element,this._elementId=this._element.id,this._styleId=this._elementId+"-style",this.tree=[],this.nodes=[],this.selectedNode={},this._init(options)};Tree.defaults={injectStyle:!0,levels:2,expandIcon:"glyphicon glyphicon-plus",collapseIcon:"glyphicon glyphicon-minus",nodeIcon:"glyphicon glyphicon-stop",color:void 0,backColor:void 0,borderColor:void 0,onhoverColor:"#F5F5F5",selectedColor:"#FFFFFF",selectedBackColor:"#428bca",enableLinks:!1,highlightSelected:!0,showBorder:!0,showTags:!1,onNodeSelected:void 0},Tree.prototype={remove:function(){this._destroy(),$.removeData(this,"plugin_treeview"),$("#"+this._styleId).remove()},_destroy:function(){this.initialized&&(this.$wrapper.remove(),this.$wrapper=null,this._unsubscribeEvents()),this.initialized=!1},_init:function(options){options.data&&("string"==typeof options.data&&(options.data=$.parseJSON(options.data)),this.tree=$.extend(!0,[],options.data),delete options.data),this.options=$.extend({},Tree.defaults,options),this._setInitialLevels(this.tree,0),this._destroy(),this._subscribeEvents(),this._render()},_unsubscribeEvents:function(){this.$element.off("click")},_subscribeEvents:function(){this._unsubscribeEvents(),this.$element.on("click",$.proxy(this._clickHandler,this)),"function"==typeof this.options.onNodeSelected&&this.$element.on("nodeSelected",this.options.onNodeSelected)},_clickHandler:function(event){this.options.enableLinks||event.preventDefault();var target=$(event.target),classList=target.attr("class")?target.attr("class").split(" "):[],node=this._findNode(target);-1!=classList.indexOf("click-expand")||-1!=classList.indexOf("click-collapse")?(this._toggleNodes(node),this._render()):node&&this._setSelectedNode(node)},_findNode:function(target){var nodeId=target.closest("li.list-group-item").attr("data-nodeid"),node=this.nodes[nodeId];return node||console.log("Error: node does not exist"),node},_triggerNodeSelectedEvent:function(node){this.$element.trigger("nodeSelected",[$.extend(!0,{},node)])},_setSelectedNode:function(node){node&&(node===this.selectedNode?this.selectedNode={}:this._triggerNodeSelectedEvent(this.selectedNode=node),this._render())},_setInitialLevels:function(nodes,level){if(nodes){level+=1;var self=this;$.each(nodes,function(id,node){level>=self.options.levels&&self._toggleNodes(node);var nodes=node.nodes?node.nodes:node._nodes?node._nodes:void 0;if(nodes)return self._setInitialLevels(nodes,level)})}},_toggleNodes:function(node){(node.nodes||node._nodes)&&(node.nodes?(node._nodes=node.nodes,delete node.nodes):(node.nodes=node._nodes,delete node._nodes))},_render:function(){this.initialized||(this.$element.addClass("treeview"),this.$wrapper=$(this._template.list),this._injectStyle(),this.initialized=!0),this.$element.empty().append(this.$wrapper.empty()),this.nodes=[],this._buildTree(this.tree,0)},_buildTree:function(nodes,level){if(nodes){level+=1;var self=this;$.each(nodes,function(id,node){node.nodeId=self.nodes.length,self.nodes.push(node);for(var treeItem=$(self._template.item).addClass("node-"+self._elementId).addClass(node===self.selectedNode?"node-selected":"").attr("data-nodeid",node.nodeId).attr("style",self._buildStyleOverride(node)),i=0;i<level-1;i++)treeItem.append(self._template.indent);if(node._nodes?treeItem.append($(self._template.iconWrapper).append($(self._template.icon).addClass("click-expand").addClass(self.options.expandIcon))):node.nodes?treeItem.append($(self._template.iconWrapper).append($(self._template.icon).addClass("click-collapse").addClass(self.options.collapseIcon))):treeItem.append($(self._template.iconWrapper).append($(self._template.icon).addClass("glyphicon"))),treeItem.append($(self._template.iconWrapper).append($(self._template.icon).addClass(node.icon?node.icon:self.options.nodeIcon))),self.options.enableLinks?treeItem.append($(self._template.link).attr("href",node.href).append(node.text)):treeItem.append(node.text),self.options.showTags&&node.tags&&$.each(node.tags,function(id,tag){treeItem.append($(self._template.badge).append(tag))}),self.$wrapper.append(treeItem),node.nodes)return self._buildTree(node.nodes,level)})}},_buildStyleOverride:function(node){var style="";return this.options.highlightSelected&&node===this.selectedNode?style+="color:"+this.options.selectedColor+";":node.color&&(style+="color:"+node.color+";"),this.options.highlightSelected&&node===this.selectedNode?style+="background-color:"+this.options.selectedBackColor+";":node.backColor&&(style+="background-color:"+node.backColor+";"),style},_injectStyle:function(){this.options.injectStyle&&!document.getElementById(this._styleId)&&$('<style type="text/css" id="'+this._styleId+'"> '+this._buildStyle()+" </style>").appendTo("head")},_buildStyle:function(){var style=".node-"+this._elementId+"{";return this.options.color&&(style+="color:"+this.options.color+";"),this.options.backColor&&(style+="background-color:"+this.options.backColor+";"),this.options.showBorder?this.options.borderColor&&(style+="border:1px solid "+this.options.borderColor+";"):style+="border:none;",style+="}",this.options.onhoverColor&&(style+=".node-"+this._elementId+":hover{background-color:"+this.options.onhoverColor+";}"),this._css+style},_template:{list:'<ul class="list-group"></ul>',item:'<li class="list-group-item"></li>',indent:'<span class="indent"></span>',iconWrapper:'<span class="icon"></span>',icon:"<i></i>",link:'<a href="#" style="color:inherit;"></a>',badge:'<span class="badge"></span>'},_css:".list-group-item{cursor:pointer;}span.indent{margin-left:10px;margin-right:10px}span.icon{margin-right:5px}"};var logError=function(message){window.console&&window.console.error(message)};$.fn.treeview=function(options,args){return this.each(function(){var self=$.data(this,"plugin_treeview");"string"==typeof options?self?$.isFunction(self[options])&&"_"!==options.charAt(0)?("string"==typeof args&&(args=[args]),self[options].apply(self,args)):logError("No such method : "+options):logError("Not initialized, can not call method : "+options):self?self._init(options):$.data(this,"plugin_treeview",new Tree(this,$.extend(!0,{},options)))})}}(jQuery,window,document);