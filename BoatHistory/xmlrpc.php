/*

This XML file does not appear to have any style information associated with it. The document tree is shown below.
<rsd xmlns="http://archipelago.phrasewise.com/rsd" version="1.0">
<service>
<engineName>WordPress</engineName>
<engineLink>http://wordpress.org/</engineLink>
<homePageLink>https://boathistoryreport.wordpress.com</homePageLink>
<apis>
<api name="WordPress" blogID="1" preferred="true" apiLink="https://boathistoryreport.wordpress.com/xmlrpc.php"/>
<api name="Movable Type" blogID="1" preferred="false" apiLink="https://boathistoryreport.wordpress.com/xmlrpc.php"/>
<api name="MetaWeblog" blogID="1" preferred="false" apiLink="https://boathistoryreport.wordpress.com/xmlrpc.php"/>
<api name="Blogger" blogID="1" preferred="false" apiLink="https://boathistoryreport.wordpress.com/xmlrpc.php"/>
<api name="Twitter" blogID="" preferred="false" apiLink="https://twitter-api.wordpress.com/"/>
</apis>
</service>
</rsd>

*/

/* * Many CSS class names in this file use the verbose "vimiumXYZ" as the class name. This is so we don't * use the same CSS class names that the page is using, so the page's CSS doesn't mess with the style of our * Vimium dialogs. * * The z-indexes of Vimium elements are very large, because we always want them to show on top. Chrome may * support up to Number.MAX_VALUE, which is approximately 1.7976e+308. We're using 2^31, which is the max * value of a singed 32 bit int. Let's try larger valeus if 2**31 empirically isn't large enough. */ /* * This vimiumReset class can be added to any of our UI elements to give it a clean slate. This is useful in * case the page has declared a broad rule like "a { padding: 50px; }" which will mess up our UI. These * declarations contain more specifiers than necessary to increase their specificity (precedence). */ .vimiumReset, div.vimiumReset, span.vimiumReset, table.vimiumReset, a.vimiumReset, a:visited.vimiumReset, a:link.vimiumReset, a:hover.vimiumReset, td.vimiumReset, tr.vimiumReset { background: none; border: none; bottom: auto; box-shadow: none; color: black; cursor: auto; display: inline; float: none; font-family : "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-size: inherit; font-style: normal; font-variant: normal; font-weight: normal; height: auto; left: auto; letter-spacing: 0; line-height: 100%; margin: 0; max-height: none; max-width: none; min-height: 0; min-width: 0; opacity: 1; padding: 0; position: static; right: auto; text-align: left; text-decoration: none; text-indent: 0; text-shadow: none; text-transform: none; top: auto; vertical-align: baseline; white-space: normal; width: auto; z-index: 2147483648; } /* Linkhints CSS */ div.internalVimiumHintMarker { position: absolute; display: block; top: -1px; left: -1px; white-space: nowrap; overflow: hidden; font-size: 11px; padding: 1px 3px 0px 3px; background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#FFF785), color-stop(100%,#FFC542)); border: solid 1px #C38A22; border-radius: 3px; box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.3); } div.internalVimiumHintMarker span { color: #302505; font-family: Helvetica, Arial, sans-serif; font-weight: bold; font-size: 11px; text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6); } div.internalVimiumHintMarker > .matchingCharacter { color: #D4AC3A; } /* Input hints CSS */ div.internalVimiumInputHint { position: absolute; display: block; background-color: rgba(255, 247, 133, 0.3); border: solid 1px #C38A22; pointer-events: none; } div.internalVimiumSelectedInputHint { background-color: rgba(255, 102, 102, 0.3); border: solid 1px #993333 !important; } div.internalVimiumSelectedInputHint span { color: white !important; } /* Help Dialog CSS */ div#vimiumHelpDialog { border:3px solid red; opacity:0.92; background-color:#eee; position:fixed; border:2px solid #b3b3b3; border-radius:6px; padding:8px 12px; width:640px; max-height: 85%; left:50%; /* This needs to be 1/2 width to horizontally center the help dialog */ margin-left:-320px; top:50px; -webkit-box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 6px; overflow-y: auto; /* One less than vimiumReset */ z-index: 2147483647; } div#vimiumHelpDialog a { color:blue; } div#vimiumTitle, div#vimiumTitle span, div#vimiumTitle * { font-size:20px; } #vimiumTitle { display: block; line-height: 130%; } div.vimiumColumn { width:50%; float:left; font-size: 11px; line-height: 130%; } div.vimiumColumn tr { display: table-row; } div.vimiumColumn td { display: table-cell; font-size: 11px; line-height: 130%; } div.vimiumColumn table, div.vimiumColumn td, div.vimiumColumn tr { padding:0; margin:0; } div.vimiumColumn table { width:100%; table-layout:auto; } div.vimiumColumn td { vertical-align:top; padding:1px; } div#vimiumHelpDialog div.vimiumColumn tr > td:first-of-type { text-align:right; font-weight:bold; color:#2f508e; white-space:nowrap; } /* Make the description column as wide as it can be. */ div#vimiumHelpDialog div.vimiumColumn tr > td:nth-of-type(3) { width:100%; } div#vimiumHelpDialog div.vimiumDivider { display: block; height:1px; width:92%; margin:10px auto; background-color:#9a9a9a; } div#vimiumHelpDialog td.vimiumHelpSectionTitle { font-weight:bold; padding-top:3px; } div#vimiumHelpDialog div.commandName { font-family:"courier new"; } /* Advanced commands are hidden by default until you show them. */ div#vimiumHelpDialog div.advanced { display: none; } div#vimiumHelpDialog div.advanced td:nth-of-type(3) { color: #555; } div#vimiumHelpDialog a.closeButton { position:absolute; right:7px; top:5px; font-family:"courier new"; font-weight:bold; color:#555; text-decoration:none; padding-left:10px; font-size:20px; } div#vimiumHelpDialog a { text-decoration: underline; } div#vimiumHelpDialog .optionsPage { position: absolute; display: block; font-size: 11px; line-height: 130%; right: 60px; top: 8px; } div#vimiumHelpDialog a.closeButton:hover { color:black; -webkit-user-select:none; } div#vimiumHelpDialogFooter { display: block; position: relative; } div#vimiumHelpDialogFooter * { font-size:10px; } div#vimiumHelpDialogFooter .toggleAdvancedCommands { position: absolute; right: 2px; top: -34px; } /* Vimium HUD CSS */ div.vimiumHUD { display: block; position: fixed; bottom: 0px; color: black; height: auto; min-height: 13px; width: auto; max-width: 400px; min-width: 150px; text-align: left; background-color: #ebebeb; padding: 3px 3px 2px 3px; margin: 0; border: 1px solid #b3b3b3; border-radius: 4px 4px 0 0; font-family: "Lucida Grande", "Arial", "Sans"; font-size: 12px; /* One less than vimium's hint markers, so link hints can be shown e.g. for the HUD panel's close button. */ z-index: 2147483646; text-shadow: 0px 1px 2px #FFF; line-height: 1.0; opacity: 0; } /* Hide the span between search box letters */ div.vimiumHUD span { display: none; } div.vimiumHUD a:link, div.vimiumHUD a:hover { background: transparent; color: blue; text-decoration: underline; } div.vimiumHUD a:link.close-button { float:right; font-family:courier new; font-weight:bold; color:#9C9A9A; text-decoration:none; padding-left:10px; margin-top:-1px; font-size:14px; } div.vimiumHUD a.close-button:hover { color:#333333; cursor:default; -webkit-user-select:none; } body.vimiumFindMode ::selection { background: #ff9632; } /* Vomnibar Frame CSS */ iframe.vomnibarFrame { background-color: transparent; padding: 0px; overflow: hidden; display: block; position: fixed; width: calc(80% + 20px); /* same adjustment as in pages/vomnibar.coffee */ min-width: 400px; height: calc(100% - 70px); top: 70px; left: 50%; margin: 0 0 0 -40%; border: none; font-family: sans-serif; /* One less than hint markers and the help dialog. */ z-index: 2147483645; } div#vimiumFlash { box-shadow: 0px 0px 4px 2px #4183C4; padding: 1px; background-color: transparent; position: absolute; z-index: 2147483648; } /* UIComponent CSS */ iframe.vimiumUIComponentHidden { display: none; } iframe.vimiumUIComponentVisible { display: block; } iframe.vimiumUIComponentReactivated { border: 5px solid yellow; }