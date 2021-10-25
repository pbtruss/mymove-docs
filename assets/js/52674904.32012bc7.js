"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[6720],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return l}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=p(n),l=o,f=m["".concat(c,".").concat(l)]||m[l]||d[l]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function l(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1293:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={sidebar_position:6},c="How To Store UI State in Redux",p={unversionedId:"frontend/guides/store-ui-state-in-redux",id:"frontend/guides/store-ui-state-in-redux",isDocsHomePage:!1,title:"How To Store UI State in Redux",description:"State that is specific to the UI should be set by dispatching an action and accessed using a selector. Here is an",source:"@site/docs/frontend/guides/store-ui-state-in-redux.md",sourceDirName:"frontend/guides",slug:"/frontend/guides/store-ui-state-in-redux",permalink:"/mymove-docs/docs/frontend/guides/store-ui-state-in-redux",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/frontend/guides/store-ui-state-in-redux.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"frontendSidebar",previous:{title:"How To Store Data in Redux",permalink:"/mymove-docs/docs/frontend/guides/store-data-in-redux"},next:{title:"Icons",permalink:"/mymove-docs/docs/frontend/guides/icons"}},u=[],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-store-ui-state-in-redux"},"How To Store UI State in Redux"),(0,i.kt)("p",null,"State that is specific to the UI should be set by dispatching an action and accessed using a selector. Here is an\nexample of how this might work for managing which of a list of Shipments is currently selected in the UI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { get } from 'lodash';\nimport PropTypes from 'prop-types';\nimport React, { Component} from 'react';\nimport { connect } from 'react-redux';\nimport { bindActionCreators } from 'redux';\n\nimport { lastError } from 'shared/Swagger/ducks';\nimport { allShipments, selectShipment } from 'shared/Entities/modules/shipments';\nimport { setCurrentShipmentID, currentShipmentID } from 'shared/UI/ducks';\n\nconst requestLabel = 'ShipmentForm.loadShipments';\n\nexport class ShipmentList extends Component {\n    componentDidMount() {\n        const id = get(this.props, 'shipmentID');\n        if (!id) return;\n\n        this.props.listShipments(requestLabel);\n    }\n\n    shipmentClicked = (id) => {\n       this.props.setCurrentShipmentID(id);\n    }\n\n    render {\n        const { shipments, selectedShipment, error } = this.props;\n\n        return (\n            <div>\n                { error && <p>An error has occurred.</p> }\n\n                <ul>\n                    { shipments.map(shipment => (<li>\n                        <button onClick={this.shipmentClicked.bind(shipment.id)}> { shipment.id } </button>\n                      </li>))}\n                </ul>\n\n                <p>The selected shipment is { selectedShipment.id }.</p>\n            </div>\n        );\n    }\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return bindActionCreators({ request, setCurrentShipmentID }, dispatch);\n}\n\nfunction mapStateToProps(state) {\n  return {\n    shipments: allShipments(state),\n    selectedShipment: selectShipment(state, currentShipmentID(state)),\n    error: lastError(state, requestLabel),\n  };\n}\n")),(0,i.kt)("p",null,"Note that the above use of defining an inline event handler for ",(0,i.kt)("inlineCode",{parentName:"p"},"onClick")," is not considered a\nbest practice. This technique is used above only for its brevity."))}m.isMDXComponent=!0}}]);