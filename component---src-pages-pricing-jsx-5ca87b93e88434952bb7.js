webpackJsonp([36573943044255],{"./src/components/PricingPlan.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n("./node_modules/react/index.js"),i=r(s),c=n("./node_modules/react-i18next/dist/commonjs/index.js"),u=n("./node_modules/gatsby-link/index.js"),d=n("./src/utils/show-intercom.js"),f=function(e){function t(){return a(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props,t=e.t,n=e.label,r=e.features;return i.default.createElement("div",{className:"Pricing__plan"},i.default.createElement("div",{className:"PricingPlan__top"},i.default.createElement("h3",{className:"Pricing__plan__heading"},t(n+".name")),i.default.createElement("p",{className:"PricingPlan__feature--key"},t(n+".response_limit")),i.default.createElement("p",{className:"PricingPlan__feature--key"},t(n+".user_limit")),i.default.createElement("p",{className:"PricingPlan__feature--key"},t(n+".support")),i.default.createElement("h5",{className:"SectionHeading"},t("features.heading")),i.default.createElement("ul",null,"plus"!==n?i.default.createElement("li",null,t(n+".includes")):null,r.map(function(e){return i.default.createElement("li",{key:e},t("features."+e))}))),i.default.createElement("div",{className:"PricingPlan__bottom"},i.default.createElement("p",{className:"Pricing__plan__price"},t(n+".price")),i.default.createElement("button",{className:"Button",onClick:function(){"enterprise"!==n?(0,u.navigateTo)("/sign-up"):(0,d.showIntercom)()}},t(n+".action_label"))))},t}(s.Component);t.default=(0,c.translate)("PricingPlan")(f),e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/home/frzn/Projects/chatbotdev.ai/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/frzn/Projects/chatbotdev.ai/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/frzn/Projects/chatbotdev.ai/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/home/frzn/Projects/chatbotdev.ai/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/home/frzn/Projects/chatbotdev.ai/node_modules/babel-preset-stage-0/lib/index.js","/home/frzn/Projects/chatbotdev.ai/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/pricing.jsx':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n("./node_modules/react/index.js"),i=r(s),c=n("./node_modules/react-i18next/dist/commonjs/index.js"),u=n("./src/components/SEO.jsx"),d=r(u),f=n("./src/components/PageHeader.jsx"),p=r(f),m=n("./src/components/Container.jsx"),b=r(m),_=n("./src/components/CustomerLogos.jsx"),h=r(_),g=n("./src/components/SignUp.jsx"),j=r(g),y=n("./src/components/PricingPlan.jsx"),P=r(y),E=function(e){function t(){return a(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props.t,t=[{label:"plus",features:["comments","email_capture","basic_export","draft","duplicate","images","themes","close_poll","skipping"]},{label:"super",features:["presenter","full_export"]},{label:"enterprise",features:["multi_response","invoice_billing"]}];return i.default.createElement("div",{className:"Pricing"},i.default.createElement(d.default,{pageMeta:{title:e("heading")+" | doopoll",path:"/pricing"}}),i.default.createElement(p.default,null,i.default.createElement("h1",null,e("heading")),i.default.createElement("p",null,e("introduction"))),i.default.createElement(b.default,{isWide:!0},i.default.createElement("div",{className:"Pricing__plans"},t.map(function(e){var t=e.label,n=e.features;return i.default.createElement(P.default,{key:t,label:t,features:n})})),i.default.createElement("p",{className:"Pricing__plans__monthly"},e("monthly_billing"))),i.default.createElement(h.default,null),i.default.createElement(j.default,null))},t}(s.Component);t.default=(0,c.translate)("Pricing")(E),e.exports=t.default}});
//# sourceMappingURL=component---src-pages-pricing-jsx-5ca87b93e88434952bb7.js.map