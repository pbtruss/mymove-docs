"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[746],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return d}});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var m=r.createContext({}),l=function(e){var t=r.useContext(m),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(o),d=a,h=u["".concat(m,".").concat(d)]||u[d]||c[d]||n;return o?r.createElement(h,s(s({ref:t},p),{},{components:o})):r.createElement(h,s({ref:t},p))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,s=new Array(n);s[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<n;l++)s[l]=o[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},72643:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=o(87462),a=o(63366),n=(o(67294),o(3905)),s=["components"],i={sidebar_position:3},m="How to Create a Form using Formik",l={unversionedId:"frontend/guides/create-a-form-using-formik",id:"frontend/guides/create-a-form-using-formik",isDocsHomePage:!1,title:"How to Create a Form using Formik",description:"See also: [[React forms using Formik]]",source:"@site/docs/frontend/guides/create-a-form-using-formik.md",sourceDirName:"frontend/guides",slug:"/frontend/guides/create-a-form-using-formik",permalink:"/mymove-docs/docs/frontend/guides/create-a-form-using-formik",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/frontend/guides/create-a-form-using-formik.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"frontendSidebar",previous:{title:"How To Call Swagger Endpoints from React",permalink:"/mymove-docs/docs/frontend/guides/access-swagger-endpoints-from-react"},next:{title:"How to display dates and times",permalink:"/mymove-docs/docs/frontend/guides/display-dates-and-times"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"TL;DR",id:"tldr",children:[]},{value:"Form Libraries",id:"form-libraries",children:[{value:"What is Formik?",id:"what-is-formik",children:[]},{value:"Form Validation, Yup?",id:"form-validation-yup",children:[]}]},{value:"React USWDS integration",id:"react-uswds-integration",children:[{value:"TextInput",id:"textinput",children:[]},{value:"Form",id:"form",children:[]}]},{value:"Storybook Form Stories",id:"storybook-form-stories",children:[{value:"Samples &gt; Form &gt; personal info",id:"samples--form--personal-info",children:[]},{value:"Samples &gt; Form &gt; inline first name",id:"samples--form--inline-first-name",children:[]},{value:"StackedTable &gt; with buttons to edit",id:"stackedtable--with-buttons-to-edit",children:[]}]}],c={toc:p};function u(e){var t=e.components,o=(0,a.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-create-a-form-using-formik"},"How to Create a Form using Formik"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See also:")," [","[React forms using Formik]","]"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"MilMove is transitioning to use Formik for rendering forms for data entry. This document strives to layout some of the basics of how to use it and links to helpful documentation."),(0,n.kt)("h2",{id:"tldr"},"TL;DR"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://jaredpalmer.com/formik/docs/overview"},"Formik")," the form library"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/jquense/yup"},"Yup")," the validation library"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/trussworks/react-uswds"},"react-uswds")," a NPM package of all the USWDS components as react components"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://storybook.move.mil/"},"MilMove Storybook")," a static site generated by builds of master",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/blob/master/src/stories"},"Storybook Story Source"))))),(0,n.kt)("h2",{id:"form-libraries"},"Form Libraries"),(0,n.kt)("h3",{id:"what-is-formik"},"What is Formik?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://jaredpalmer.com/formik/docs/overview"},"Formik")," is a form library that aims to help with creating, maintaining, and handling forms when using React. The formik documentation is good place to start. Below is an example of a simple form wrapped in a Formik context. To see this example working ",(0,n.kt)("a",{parentName:"p",href:"https://storybook.move.mil/?path=/story/samples-form--personal-info"},"check out the storybook page")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'<Formik\n  initialValues={{ firstName: \'\', lastName: \'\', email: \'\' }}\n  validationSchema={Yup.object({\n    firstName: Yup.string().max(15, \'Must be 15 characters or less\').required(\'Required\'),\n    lastName: Yup.string().max(20, \'Must be 20 characters or less\').required(\'Required\'),\n    email: Yup.string().email(\'Invalid email address\').required(\'Required\'),\n  })}\n  onSubmit={onSubmitHandlerFunction}\n  onReset={onResetHandlerFunction}\n>\n  <Form>\n    <TextInput name="firstName" label="First Name" type="text" />\n    <TextInput name="lastName" label="Last Name" type="text" />\n    <TextInput name="email" label="Email Address" type="email" />\n    <div className="display-flex">\n      <Button type="submit">Submit</Button>\n      <Button type="reset" secondary>\n        Cancel\n      </Button>\n    </div>\n  </Form>\n</Formik>\n')),(0,n.kt)("h3",{id:"form-validation-yup"},"Form Validation, Yup?"),(0,n.kt)("p",null,"Formik leaves form validation work to their users, this allows the users to select their own validation library or implement one on their own. Formik recommends a library called ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/jquense/yup"},"Yup")," and integrates with it seemlessly. MilMove has chosen to use this library as well for validation because of its simplicity, support for many form validation rules, and its integration with Formik. Below is a snippet of code that shows how you can declare the ",(0,n.kt)("a",{parentName:"p",href:"https://jaredpalmer.com/formik/docs/guides/validation#validationschema"},"validationSchema")," using the Yup library so that Formik will automatically validate your form."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"<Formik\n  initialValues={{ firstName: '', lastName: '', email: '' }}\n  validationSchema={Yup.object({\n    firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),\n    lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),\n    email: Yup.string().email('Invalid email address').required('Required'),\n  })}\n  ...\n>\n  <Form>\n...\n")),(0,n.kt)("h2",{id:"react-uswds-integration"},"React USWDS integration"),(0,n.kt)("p",null,"MilMove is making use of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/trussworks/react-uswds"},"react-uswds")," package to leverage the USWDS components built for react. These components are just thin wrappers around the basic html, which makes them easy to use in any react project."),(0,n.kt)("p",null,"This means that we cannot really make use of both the form components provided by Formik and react-uswds. For this reason we are wrapping the react-uswds form components to connect them properly to Formik while still displaying in the USWDS style. An example of this can be seen in ",(0,n.kt)("inlineCode",{parentName:"p"},"src/components/form/fields/TextInput.jsx"),", which wraps the basic ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/trussworks/react-uswds/blob/develop/src/components/forms/TextInput/TextInput.tsx"},"USWDS TextInput")," component to connect it to Formik. Another example is the Form component ",(0,n.kt)("inlineCode",{parentName:"p"},"src/components/form/Form.jsx"),". It is expected that we will add more field wrappers as we develop forms."),(0,n.kt)("h3",{id:"textinput"},"TextInput"),(0,n.kt)("p",null,"There are two components defined in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/src/components/form/fields/TextInput.jsx"},"src/components/form/fields/TextInput.jsx")," to allow reuse of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/src/components/form/ErrorMessage.jsx"},"ErrorMessage")," and USWDS TextInput pattern."),(0,n.kt)("h4",{id:"textinputminimal"},"TextInputMinimal"),(0,n.kt)("p",null,"This component renders a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/trussworks/react-uswds/blob/develop/src/components/forms/TextInput/TextInput.tsx"},"UswdsTextInput")," from react-uswds and an ErrorMessage. The latter component is basically the same version of ErrorMessage from react-uswds but with support for showing or hiding based on a prop."),(0,n.kt)("p",null,"As you can see in the code below we call ",(0,n.kt)("inlineCode",{parentName:"p"},"useField")," which is a ",(0,n.kt)("a",{parentName:"p",href:"https://jaredpalmer.com/formik/docs/api/useField"},"hook from Formik")," that provides access to the appropriate properties and callbacks for our field based on the react context that this component is used in. It also provides access to the Formik context for form meta data, which includes if a field has been touched or has any validation errors. This component uses that information to appropriately display an error message."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"...\nimport { useField } from 'formik';\n...\n\nexport const TextInputMinimal = ({ id, name, ...props }) => {\n  const [field, meta] = useField({ id, name, ...props });\n  const hasError = meta.touched && !!meta.error;\n  return (\n    <>\n      <ErrorMessage display={hasError}>{meta.error}</ErrorMessage>\n      <UswdsTextInput id={id} name={name} {...field} {...props} />\n    </>\n  );\n};\n")),(0,n.kt)("h4",{id:"textinput-1"},"TextInput"),(0,n.kt)("p",null,"This component renders a text input field that follows the USWDS standard for a TextInput component. It makes use of Formik's ",(0,n.kt)("a",{parentName:"p",href:"https://jaredpalmer.com/formik/docs/api/useField"},"useField")," hook to extract the meta data for the field to support checking touched and errors to appropriately set the props on the FormGroup and Label. It then includes the ",(0,n.kt)("inlineCode",{parentName:"p"},"TextInputMinimal")," component from above."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"...\nimport { useField } from 'formik';\n...\n\nexport const TextInput = ({ label, id, name, ...props }) => {\n  const [, meta] = useField({ id, name, ...props });\n  const hasError = meta.touched && !!meta.error;\n  return (\n    <FormGroup error={hasError}>\n      <Label error={hasError} htmlFor={id || name}>\n        {label}\n      </Label>\n      <TextInputMinimal id={id} name={name} {...props} />\n    </FormGroup>\n  );\n};\n")),(0,n.kt)("h3",{id:"form"},"Form"),(0,n.kt)("p",null,"This component wraps the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/trussworks/react-uswds/blob/develop/src/components/forms/Form/Form.tsx"},"React USWDS Form")," and makes use of the ",(0,n.kt)("a",{parentName:"p",href:"https://jaredpalmer.com/formik/docs/api/useFormikContext"},"useFormikContext")," hook to tie in the react-uswds Form component into the Formik context that is being used. The context hook provides the callbacks for handling submit and reset of the form, as well as all the errors and touched state. The latter two items are passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"errorCallback")," method if there is one. This feature was needed to pass the error and touched state up for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/src/components/form/StackedTableRowForm.jsx"},"StackedTableRowForm"),"."),(0,n.kt)("p",null,"This component also uses the ",(0,n.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-effect.html"},"useEffect")," React Hook since ",(0,n.kt)("inlineCode",{parentName:"p"},"errorCallback")," is currently used by ",(0,n.kt)("inlineCode",{parentName:"p"},"StackedTableRowForm")," to update the state of its parent, and this is a functional component. If it were a class component we could just call the ",(0,n.kt)("inlineCode",{parentName:"p"},"errorCallback")," in the appropriate React lifecycle method."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"...\nimport { useFormikContext } from 'formik';\n...\n\nexport const Form = ({ errorCallback, ...props }) => {\n  const { errors, touched, handleReset, handleSubmit } = useFormikContext();\n  React.useEffect(() => {\n    if (errorCallback) {\n      errorCallback(errors, touched);\n    }\n  });\n  return <UswdsForm onSubmit={handleSubmit} onReset={handleReset} {...props} />;\n};\n")),(0,n.kt)("h2",{id:"storybook-form-stories"},"Storybook Form Stories"),(0,n.kt)("p",null,"There are a couple sample forms in storybook that show how to setup a form and its actions with the MilMove components."),(0,n.kt)("h3",{id:"samples--form--personal-info"},"Samples > Form > personal info"),(0,n.kt)("p",null,"A simple form that renders 3 text input fields, a submit and a cancel button. You can see it ",(0,n.kt)("a",{parentName:"p",href:"https://storybook.move.mil/?path=/story/samples-form--personal-info"},"here in storybook")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/src/stories/samples.stories.jsx"},"the story source"),". This form is wired up with some basic validations on each of the fields as well as storybook actions so that you can see what values are submitted. This example also makes use of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dump247/storybook-state"},"storybook state plugin")," to allow the form to save data in storybook, at least until you reload."),(0,n.kt)("h3",{id:"samples--form--inline-first-name"},"Samples > Form > inline first name"),(0,n.kt)("p",null,"This is a variation of a simple form that makes uses of the StackedTableRowForm that makes a Formik form inside one row for use with the new MilMove StackedTable layouts. ",(0,n.kt)("a",{parentName:"p",href:"https://storybook.move.mil/?path=/story/samples-form--inline-first-name"},"See here in storybook"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/src/stories/samples.stories.jsx"},"storybook story source"),", or component source code ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/src/components/form/StackedTableRowForm.jsx"},"src/components/form/StackedTableRowForm.jsx"),". This sample displays a StackedTable with 2 rows, one for first name and one for last name both of which are editable in a similar fashion to the personal info example above."),(0,n.kt)("h3",{id:"stackedtable--with-buttons-to-edit"},"StackedTable > with buttons to edit"),(0,n.kt)("p",null,"This is an example of a Formik form in a component that will be used in several places of the new MilMove designs. It is similar to the above example, but differs in a couple ways. First, it doesn't make use of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dump247/storybook-state"},"storybook state plugin")," so no values are saved. Second, this component uses the new design for showing errors in stacked tables by adding a red bar to the left of the label and leaving the error message in red. ",(0,n.kt)("a",{parentName:"p",href:"https://storybook.move.mil/?path=/story/components-stackedtable--with-buttons-to-edit"},"See in storybook")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/src/stories/stackedTable.stories.jsx"},"storybook story source")))}u.isMDXComponent=!0}}]);