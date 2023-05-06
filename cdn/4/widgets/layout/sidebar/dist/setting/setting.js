System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-theme","jimu-ui/advanced/style-setting-components","jimu-ui","jimu-ui/basic/color-picker"],(function(e,t){var o={},i={},s={},n={},l={},a={};return{setters:[function(e){o.Immutable=e.Immutable,o.React=e.React,o.classNames=e.classNames,o.css=e.css,o.jsx=e.jsx},function(e){i.SettingRow=e.SettingRow,i.SettingSection=e.SettingSection},function(e){s.getTheme2=e.getTheme2},function(e){n.BackgroundSetting=e.BackgroundSetting,n.BorderSetting=e.BorderSetting,n.InputUnit=e.InputUnit},function(e){l.Button=e.Button,l.Collapse=e.Collapse,l.DistanceUnits=e.DistanceUnits,l.Icon=e.Icon,l.NormalLineType=e.NormalLineType,l.NumericInput=e.NumericInput,l.Select=e.Select,l.Switch=e.Switch,l.utils=e.utils},function(e){a.ThemeColorPicker=e.ThemeColorPicker}],execute:function(){e((()=>{var e={10119:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m14 4-6 8-6-8h12Z" fill="#000"></path></svg>'},72957:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.854 2.153a.485.485 0 0 0-.708 0 .538.538 0 0 0 0 .738l5.5 5.956a.485.485 0 0 0 .708 0l5.5-5.956a.538.538 0 0 0 0-.738.485.485 0 0 0-.708 0L8 7.74 2.854 2.153Zm0 5a.485.485 0 0 0-.708 0 .538.538 0 0 0 0 .738l5.5 5.956a.485.485 0 0 0 .708 0l5.5-5.956a.538.538 0 0 0 0-.738.485.485 0 0 0-.708 0L8 12.74 2.854 7.153Z" fill="#000"></path></svg>'},59788:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .538.538 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.538.538 0 0 1 0-.738Z" fill="#000"></path></svg>'},96940:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMCAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMSAxSDE5VjEzSDFWMVpNMCAxM1YwSDIwVjEzVjIySDBWMTNaIiBmaWxsPSIjNkE2QTZBIi8+DQo8L3N2Zz4NCg=="},49370:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAzMCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAgMEgwVjE4SDEwSDMwVjBIMTBaTTEwIDE3SDI5VjFIMTBWMTdaIiBmaWxsPSIjNkE2QTZBIi8+DQo8L3N2Zz4NCg=="},62933:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAzMCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAgMTdWMUgxVjE3SDIwWk0yMCAwSDMwVjE4SDIwSDBWMEgyMFoiIGZpbGw9IiM2QTZBNkEiLz4NCjwvc3ZnPg0K"},89046:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMCAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTkgOUgxVjIxSDE5VjlaTTAgOVYwSDIwVjlWMjJIMFY5WiIgZmlsbD0iIzZBNkE2QSIvPg0KPC9zdmc+DQo="},48891:e=>{"use strict";e.exports=o},34796:e=>{"use strict";e.exports=s},30726:e=>{"use strict";e.exports=l},77756:e=>{"use strict";e.exports=i},55505:e=>{"use strict";e.exports=n},41362:e=>{"use strict";e.exports=a}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var c={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(c),r.d(c,{default:()=>M});var e,t,o,i,s=r(48891),n=r(77756),l=r(34796),a=r(55505),g=r(30726),d=r(41362);!function(e){e.First="FIRST",e.Second="SECOND"}(e||(e={})),function(e){e.Start="START",e.Center="CENTER",e.End="END"}(t||(t={})),function(e){e.Horizontal="HORIZONTAL",e.Vertical="VERTICAL"}(o||(o={})),function(e){e.Left="LEFT",e.Right="RIGHT",e.Up="UP",e.Down="DOWN"}(i||(i={}));const p=(0,s.Immutable)({direction:o.Horizontal,collapseSide:e.First,overlay:!1,size:"300px",divider:{visible:!0,lineStyle:{type:g.NormalLineType.SOLID,color:"var(--light-500)",width:"1px"}},resizable:!1,toggleBtn:{visible:!0,icon:i.Left,iconSource:0,offsetX:15,offsetY:0,position:t.Center,iconSize:14,width:15,height:60,border:{type:g.NormalLineType.SOLID,color:"var(--light-500)",width:"1px"},color:{normal:{icon:{useTheme:!1,color:"var(--black)"},bg:{useTheme:!0,color:"var(--light)"}},hover:{bg:{useTheme:!0,color:"var(--light)"}}},expandStyle:{style:{borderRadius:"0 92px 92px 0"}},collapseStyle:{style:{borderRadius:"0 92px 92px 0"}}},defaultState:1}),h={left:{default:{icon:i.Left,offsetX:15,offsetY:0,position:t.Center,iconSize:14,width:15,height:60,color:{normal:{icon:{useTheme:!1,color:"#FFFFFF"},bg:{useTheme:!0,color:"var(--primary)"}},hover:{bg:{useTheme:!0,color:"var(--primary-700)"}}},expandStyle:{style:{borderRadius:"0 92px 92px 0"}},collapseStyle:{style:{borderRadius:"0 92px 92px 0"}}},rect:{icon:i.Left,offsetX:15,offsetY:0,position:t.Center,iconSize:14,width:15,height:40,color:{normal:{icon:{useTheme:!0,color:"var(--primary)"},bg:{useTheme:!0,color:"var(--light-400)",opacity:.6}},hover:{bg:{useTheme:!0,color:"var(--light-400)"}}},expandStyle:{style:{borderRadius:"0 4px 4px 0"}},collapseStyle:{style:{borderRadius:"0 4px 4px 0"}}}},right:{default:{icon:i.Right,offsetX:-15,offsetY:0,position:t.Center,iconSize:14,width:15,height:60,color:{normal:{icon:{useTheme:!1,color:"#FFFFFF"},bg:{useTheme:!0,color:"var(--primary)"}},hover:{bg:{useTheme:!0,color:"var(--primary-700)"}}},expandStyle:{style:{borderRadius:"92px 0 0 92px"}},collapseStyle:{style:{borderRadius:"92px 0 0 92px"}}},rect:{icon:i.Right,offsetX:-15,offsetY:0,position:t.Center,iconSize:14,width:15,height:40,color:{normal:{icon:{useTheme:!0,color:"var(--primary)"},bg:{useTheme:!0,color:"var(--light-400)",opacity:.6}},hover:{bg:{useTheme:!0,color:"var(--light-400)"}}},expandStyle:{style:{borderRadius:"4px 0 0 4px"}},collapseStyle:{style:{borderRadius:"4px 0 0 4px"}}}},top:{default:{icon:i.Up,offsetX:0,offsetY:15,position:t.Center,iconSize:14,width:60,height:15,color:{normal:{icon:{useTheme:!1,color:"#FFFFFF"},bg:{useTheme:!0,color:"var(--primary)"}},hover:{bg:{useTheme:!0,color:"var(--primary-800)"}}},expandStyle:{style:{borderRadius:"0 0 92px 92px"}},collapseStyle:{style:{borderRadius:"0 0 92px 92px"}}},rect:{icon:i.Up,offsetX:0,offsetY:15,position:t.Center,iconSize:14,width:40,height:15,color:{normal:{icon:{useTheme:!0,color:"var(--primary)"},bg:{useTheme:!0,color:"var(--light-400)",opacity:.6}},hover:{bg:{useTheme:!0,color:"var(--light-400)"}}},expandStyle:{style:{borderRadius:"0 0 4px 4px"}},collapseStyle:{style:{borderRadius:"0 0 4px 4px"}}}},bottom:{default:{icon:i.Down,offsetX:0,offsetY:-15,position:t.Center,iconSize:14,width:60,height:15,color:{normal:{icon:{useTheme:!1,color:"#FFFFFF"},bg:{useTheme:!0,color:"var(--primary)"}},hover:{bg:{useTheme:!0,color:"var(--primary-700)"}}},expandStyle:{style:{borderRadius:"92px 92px 0 0"}},collapseStyle:{style:{borderRadius:"92px 92px 0 0"}}},rect:{icon:i.Down,offsetX:0,offsetY:-15,position:t.Center,iconSize:14,width:40,height:15,color:{normal:{icon:{useTheme:!0,color:"var(--primary)"},bg:{useTheme:!0,color:"var(--light-400)",opacity:.6}},hover:{bg:{useTheme:!0,color:"var(--light-400)"}}},expandStyle:{style:{borderRadius:"4px 4px 0 0"}},collapseStyle:{style:{borderRadius:"4px 4px 0 0"}}}}};var u=r(59788),m=r.n(u);const f=e=>{const t=window.SVG,{className:o}=e,i=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o}(e,["className"]),n=(0,s.classNames)("jimu-icon jimu-icon-component",o);return t?s.React.createElement(t,Object.assign({className:n,src:m()},i)):s.React.createElement("svg",Object.assign({className:n},i))};var b=r(10119),x=r.n(b);const S=e=>{const t=window.SVG,{className:o}=e,i=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o}(e,["className"]),n=(0,s.classNames)("jimu-icon jimu-icon-component",o);return t?s.React.createElement(t,Object.assign({className:n,src:x()},i)):s.React.createElement("svg",Object.assign({className:n},i))};var v=r(72957),y=r.n(v);const j=e=>{const t=window.SVG,{className:o}=e,i=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o}(e,["className"]),n=(0,s.classNames)("jimu-icon jimu-icon-component",o);return t?s.React.createElement(t,Object.assign({className:n,src:y()},i)):s.React.createElement("svg",Object.assign({className:n},i))},w=[g.DistanceUnits.PIXEL],I=["default","rect"],C=r(89046),B=r(96940),T=r(49370),k=r(62933),N={width:"7.5rem"};function z(t,i){return t===o.Horizontal?i===e.First?h.left:h.right:i===e.First?h.top:h.bottom}class R extends s.React.PureComponent{constructor(t){super(t),this.dockHorizontalLeft=()=>{const{config:t}=this.props,i=t.direction||o.Horizontal,s=t.collapseSide||e.First;i===o.Horizontal&&s===e.First||this.updateDockside(o.Horizontal,e.First)},this.dockHorizontalRight=()=>{const{config:t}=this.props,i=t.direction||o.Horizontal,s=t.collapseSide||e.First;i===o.Horizontal&&s===e.Second||this.updateDockside(o.Horizontal,e.Second)},this.dockVerticalTop=()=>{const{config:t}=this.props,i=t.direction||o.Horizontal,s=t.collapseSide||e.First;i===o.Vertical&&s===e.First||this.updateDockside(o.Vertical,e.First)},this.dockVerticalBottom=()=>{const{config:t}=this.props,i=t.direction||o.Horizontal,s=t.collapseSide||e.First;i===o.Vertical&&s===e.Second||this.updateDockside(o.Vertical,e.Second)},this.updateDefaultState=e=>{this.props.onSettingChange({id:this.props.widgetId,config:this.props.config.set("defaultState",+e.target.value)})},this.updateOverlay=e=>{this.props.onSettingChange({id:this.props.widgetId,config:this.props.config.set("overlay",e.target.checked)})},this.updateResizable=e=>{this.props.onSettingChange({id:this.props.widgetId,config:this.props.config.set("resizable",e.target.checked)})},this.updateSize=e=>{this.props.onSettingChange({id:this.props.widgetId,config:this.props.config.set("size",`${e.distance}${e.unit}`)})},this.updateControllerPos=e=>{this.updateToggleBtn("position",e.target.value)},this.updateControllerOffsetX=e=>{this.updateToggleBtn("offsetX",e)},this.updateControllerOffsetY=e=>{this.updateToggleBtn("offsetY",e)},this.updateControllerWidth=e=>{this.updateToggleBtn("width",e)},this.updateControllerHeight=e=>{this.updateToggleBtn("height",e)},this.updateControllerIconSize=e=>{this.updateToggleBtn("iconSize",e)},this.updateFirstPanelBg=e=>{this.props.onSettingChange({id:this.props.widgetId,config:this.props.config.setIn(["firstPanelStyle","background"],e)})},this.updateSecondPanelBg=e=>{this.props.onSettingChange({id:this.props.widgetId,config:this.props.config.setIn(["secondPanelStyle","background"],e)})},this.updateToggleBtnBg=e=>{this.props.onSettingChange({id:this.props.widgetId,config:this.props.config.setIn(["toggleBtn","color","normal","bg","color"],e).setIn(["toggleBtn","color","normal","bg","useTheme"],!1)})},this.updateToggleBtnHoverBg=e=>{this.props.onSettingChange({id:this.props.widgetId,config:this.props.config.setIn(["toggleBtn","color","hover","bg","color"],e).setIn(["toggleBtn","color","hover","bg","useTheme"],!1)})},this.updateToggleBtnBorder=e=>{this.props.onSettingChange({id:this.props.widgetId,config:this.props.config.setIn(["toggleBtn","border"],e)})},this.updateToggleBtnIcon=e=>{this.props.onSettingChange({id:this.props.widgetId,config:this.props.config.setIn(["toggleBtn","iconSource"],+e.target.value)})},this.updateToggleBtnIconColor=e=>{this.props.onSettingChange({id:this.props.widgetId,config:this.props.config.setIn(["toggleBtn","color","normal","icon","color"],e)})},this.updateDividerStyle=e=>{this.props.onSettingChange({id:this.props.widgetId,config:this.props.config.setIn(["divider","lineStyle"],e)})},this.updateDividerVisible=e=>{this.props.onSettingChange({id:this.props.widgetId,config:this.props.config.setIn(["divider","visible"],e.target.checked)})},this.updateToggleBtnVisible=e=>{this.props.onSettingChange({id:this.props.widgetId,config:this.props.config.setIn(["toggleBtn","visible"],e.target.checked)})},this.useDefaultToggleStyle=()=>{const{config:e}=this.props;if(e.toggleBtn.template!==I[0]){const t=z(e.direction,e.collapseSide)[I[0]];let o=this.updateToggleBtnStyles(t);o=o.setIn(["toggleBtn","template"],I[0]),this.props.onSettingChange({id:this.props.widgetId,config:o})}},this.useRectToggleStyle=()=>{const{config:e}=this.props;if(e.toggleBtn.template!==I[1]){const t=z(e.direction,e.collapseSide)[I[1]];let o=this.updateToggleBtnStyles(t);o=o.setIn(["toggleBtn","template"],I[1]),this.props.onSettingChange({id:this.props.widgetId,config:o})}},this.selectedToggleBtnStyle="default"}updateDockside(e,t){const{config:o}=this.props,i=o.toggleBtn.template||I[0],s=z(e,t)[i];let n=this.updateToggleBtnStyles(s);n=n.set("direction",e).set("collapseSide",t),this.props.onSettingChange({id:this.props.widgetId,config:n})}updateToggleBtnStyles(e){const{config:t}=this.props;let o=t;return["offsetX","offsetY","position","width","height","icon","expandStyle","collapseStyle"].forEach((t=>{o=o.setIn(["toggleBtn",t],e[t])})),o}updateToggleBtn(e,t){this.props.onSettingChange({id:this.props.widgetId,config:this.props.config.setIn(["toggleBtn",e],t)})}getStyle(){return s.css`
      .toggle-btn-style {
        background: var(--light-200);
        width: 108px;
        height: 30px;
        cursor: pointer;

        &.selected {
          outline: 2px solid var(--primary-600);
        }
      }
    `}getDocksideStyle(){return s.css`
      .dock-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 30px;
        cursor: pointer;
        background: var(--light-200);
        border: none;

        &.selected {
          outline: 2px solid var(--primary-600);
        }
        &:hover {
          background: var(--light-200);
        }
      }
    `}render(){var t,i,r,c,p,h,u,m,b,x,v,y,z,R,D;const{config:M,formatMessage:O}=this.props,Z=(0,l.getTheme2)(),P=M.toggleBtn.template||I[0],F=M.direction||o.Horizontal,V=M.collapseSide||e.First,E=F===o.Horizontal;return(0,s.jsx)("div",{className:"hsidebar-layout-setting",css:this.getStyle()},(0,s.jsx)(n.SettingSection,{title:O("panel"),role:"group","aria-label":O("panel")},(0,s.jsx)(n.SettingRow,{label:O("dockSide"),flow:"wrap"},(0,s.jsx)("div",{className:"d-flex justify-content-between w-100",css:this.getDocksideStyle()},(0,s.jsx)(g.Button,{className:(0,s.classNames)("dock-btn",{selected:E&&V===e.First}),onClick:this.dockHorizontalLeft,"aria-label":O("left"),"aria-pressed":E&&V===e.First,icon:!0},(0,s.jsx)(g.Icon,{icon:T,width:30,height:18,currentColor:!1,autoFlip:!0})),(0,s.jsx)(g.Button,{className:(0,s.classNames)("dock-btn",{selected:E&&V===e.Second}),onClick:this.dockHorizontalRight,"aria-label":O("right"),"aria-pressed":E&&V===e.Second,icon:!0},(0,s.jsx)(g.Icon,{icon:k,width:30,height:18,currentColor:!1,autoFlip:!0})),(0,s.jsx)(g.Button,{className:(0,s.classNames)("dock-btn",{selected:!E&&V===e.First}),onClick:this.dockVerticalTop,"aria-label":O("top"),"aria-pressed":!E&&V===e.First,icon:!0},(0,s.jsx)(g.Icon,{icon:C,width:22,height:20,currentColor:!1})),(0,s.jsx)(g.Button,{className:(0,s.classNames)("dock-btn",{selected:!E&&V===e.Second}),onClick:this.dockVerticalBottom,"aria-label":O("bottom"),"aria-pressed":!E&&V===e.Second,icon:!0},(0,s.jsx)(g.Icon,{icon:B,width:22,height:20,currentColor:!1})))),(0,s.jsx)(n.SettingRow,{label:O("size")},(0,s.jsx)(a.InputUnit,{"aria-label":O("size"),min:0,units:w,value:g.utils.stringOfLinearUnit(M.size),style:N,onChange:this.updateSize})),(0,s.jsx)(n.SettingRow,{label:O("overlay")},(0,s.jsx)(g.Switch,{"aria-label":O("overlay"),checked:M.overlay,onChange:this.updateOverlay})),(0,s.jsx)(n.SettingRow,{label:O("resizable")},(0,s.jsx)(g.Switch,{"aria-label":O("resizable"),checked:M.resizable,onChange:this.updateResizable})),(0,s.jsx)(n.SettingRow,{label:O("defaultState")},(0,s.jsx)(g.Select,{"aria-label":O("defaultState"),size:"sm",value:M.defaultState,onChange:this.updateDefaultState,style:N},(0,s.jsx)("option",{value:"1"},O("expanded")),(0,s.jsx)("option",{value:"0"},O("collapsed"))))),(0,s.jsx)(n.SettingSection,{title:(0,s.jsx)("div",{className:"d-flex"},(0,s.jsx)("div",null,O("toggleBtn")),(0,s.jsx)("div",{className:"ml-auto"},(0,s.jsx)(g.Switch,{"aria-label":O("toggleBtn"),checked:M.toggleBtn.visible,onChange:this.updateToggleBtnVisible})))},(0,s.jsx)(g.Collapse,{isOpen:M.toggleBtn.visible},(0,s.jsx)(n.SettingRow,{label:O("style"),flow:"wrap"},(0,s.jsx)("div",{className:"d-flex w-100 justify-content-between"},(0,s.jsx)(g.Button,{className:(0,s.classNames)("border-0 toggle-btn-style d-flex justify-content-center align-items-center",{selected:P===I[0]}),"aria-pressed":P===I[0],onClick:this.useDefaultToggleStyle},(0,s.jsx)("div",{css:s.css`
                      width: 60px;
                      height: 15px;
                      background: var(--light-800);
                      border-radius: 100px 100px 0 0;
                    `,className:"d-flex justify-content-center align-items-center"})),(0,s.jsx)(g.Button,{className:(0,s.classNames)("border-0 toggle-btn-style d-flex justify-content-center align-items-center ml-1",{selected:P===I[1]}),"aria-pressed":P===I[1],onClick:this.useRectToggleStyle},(0,s.jsx)("div",{css:s.css`
                      width: 40px;
                      height: 15px;
                      background: var(--light-800);
                      border-radius: 4px 4px 0 0;
                    `,className:"toggle-btn d-flex justify-content-center align-items-center"})))),(0,s.jsx)(n.SettingRow,{label:O("icon"),flow:"wrap"},(0,s.jsx)("div",{className:"d-flex justify-content-between align-items-center"},(0,s.jsx)(d.ThemeColorPicker,{title:O("iconBackground"),"aria-label":O("iconBackground"),specificTheme:Z,onChange:this.updateToggleBtnIconColor,value:null!==(c=null===(r=null===(i=null===(t=M.toggleBtn.color)||void 0===t?void 0:t.normal)||void 0===i?void 0:i.icon)||void 0===r?void 0:r.color)&&void 0!==c?c:Z.colors.black}),(0,s.jsx)(g.Select,{"aria-label":O("type"),size:"sm",css:s.css`width: 30%`,value:null!==(p=M.toggleBtn.iconSource)&&void 0!==p?p:0,onChange:this.updateToggleBtnIcon},(0,s.jsx)("option",{value:"0"},(0,s.jsx)(f,{size:"s"})),(0,s.jsx)("option",{value:"1"},(0,s.jsx)(j,{size:"s"})),(0,s.jsx)("option",{value:"2"},(0,s.jsx)(S,{size:"s"}))),(0,s.jsx)(g.NumericInput,{"aria-label":O("iconSize"),size:"sm",min:8,max:100,css:s.css`width: 40%`,value:M.toggleBtn.iconSize,onChange:this.updateControllerIconSize}))),(0,s.jsx)(n.SettingRow,{label:O("background"),flow:"wrap"},(0,s.jsx)("div",{className:"w-100"},(0,s.jsx)("div",{className:"d-flex align-items-center justify-content-between mt-1"},(0,s.jsx)("span",{className:"setting-text-level-3"},O("default")),(0,s.jsx)(d.ThemeColorPicker,{title:O("background"),"aria-label":O("background"),specificTheme:Z,onChange:this.updateToggleBtnBg,value:null!==(b=null===(m=null===(u=null===(h=M.toggleBtn.color)||void 0===h?void 0:h.normal)||void 0===u?void 0:u.bg)||void 0===m?void 0:m.color)&&void 0!==b?b:Z.colors.light})),(0,s.jsx)("div",{className:"d-flex align-items-center justify-content-between mt-2"},(0,s.jsx)("span",{className:"setting-text-level-3"},O("hover")),(0,s.jsx)(d.ThemeColorPicker,{title:O("background"),"aria-label":O("background"),specificTheme:Z,onChange:this.updateToggleBtnHoverBg,value:null!==(z=null===(y=null===(v=null===(x=M.toggleBtn.color)||void 0===x?void 0:x.hover)||void 0===v?void 0:v.bg)||void 0===y?void 0:y.color)&&void 0!==z?z:Z.colors.light})))),(0,s.jsx)(n.SettingRow,{label:O("border"),flow:"wrap"},(0,s.jsx)(a.BorderSetting,{value:M.toggleBtn.border,onChange:this.updateToggleBtnBorder})),(0,s.jsx)(n.SettingRow,{label:O("width")},(0,s.jsx)(g.NumericInput,{"aria-label":O("width"),min:0,size:"sm",style:N,value:M.toggleBtn.width,onChange:this.updateControllerWidth})),(0,s.jsx)(n.SettingRow,{label:O("height")},(0,s.jsx)(g.NumericInput,{"aria-label":O("height"),min:0,size:"sm",style:N,value:M.toggleBtn.height,onChange:this.updateControllerHeight})),(0,s.jsx)(n.SettingRow,{label:O("position")},(0,s.jsx)(g.Select,{"aria-label":O("position"),size:"sm",value:M.toggleBtn.position,onChange:this.updateControllerPos,style:N},(0,s.jsx)("option",{value:"START"},O(E?"T":"L")),(0,s.jsx)("option",{value:"CENTER"},O("center")),(0,s.jsx)("option",{value:"END"},O(E?"B":"R")))),(0,s.jsx)(n.SettingRow,{label:O("offsetX")},(0,s.jsx)(g.NumericInput,{"aria-label":O("offsetX"),size:"sm",style:N,value:M.toggleBtn.offsetX,onChange:this.updateControllerOffsetX})),(0,s.jsx)(n.SettingRow,{label:O("offsetY")},(0,s.jsx)(g.NumericInput,{"aria-label":O("offsetY"),size:"sm",style:N,value:M.toggleBtn.offsetY,onChange:this.updateControllerOffsetY})))),(0,s.jsx)(n.SettingSection,{title:(0,s.jsx)("div",{className:"d-flex"},(0,s.jsx)("div",null,O("divider")),(0,s.jsx)("div",{className:"ml-auto"},(0,s.jsx)(g.Switch,{"aria-label":O("divider"),checked:M.divider.visible,onChange:this.updateDividerVisible})))},(0,s.jsx)(g.Collapse,{isOpen:M.divider.visible},(0,s.jsx)(n.SettingRow,{label:O("style"),flow:"wrap"},(0,s.jsx)(a.BorderSetting,{value:M.divider.lineStyle,onChange:this.updateDividerStyle})))),(0,s.jsx)(n.SettingSection,{title:O(E?"leftPanel":"topPanel")},(0,s.jsx)(n.SettingRow,null,(0,s.jsx)(a.BackgroundSetting,{background:null===(R=M.firstPanelStyle)||void 0===R?void 0:R.background,onChange:this.updateFirstPanelBg}))),(0,s.jsx)(n.SettingSection,{title:O(E?"rightPanel":"bottomPanel")},(0,s.jsx)(n.SettingRow,null,(0,s.jsx)(a.BackgroundSetting,{background:null===(D=M.secondPanelStyle)||void 0===D?void 0:D.background,onChange:this.updateSecondPanelBg}))))}}const D={expanded:"Expanded",collapsed:"Collapsed",panel:"Side panel",overlay:"Overlay",resizable:"Resizable",defaultState:"Default state",toggleBtn:"Collapse button",divider:"Divider",leftPanel:"Left panel",topPanel:"Top panel",rightPanel:"Right panel",bottomPanel:"Bottom panel",size:"Size",dockSide:"Dock side",visible:"Visible"};class M extends s.React.PureComponent{constructor(){super(...arguments),this.formatMessage=e=>this.props.intl.formatMessage({id:e,defaultMessage:D[e]})}render(){const{config:e,id:t,onSettingChange:o}=this.props;return(0,s.jsx)(R,{widgetId:t,config:e||p,formatMessage:this.formatMessage,onSettingChange:o})}}})(),c})())}}}));