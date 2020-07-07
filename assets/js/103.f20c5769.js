(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{2078:function(e,t,a){"use strict";a.r(t);var n=a(21),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"using-a-custom-gem"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-a-custom-gem"}},[e._v("#")]),e._v(" Using a Custom Gem")]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("Rubles run using the internal JRuby interpreter. While it is theoretically possible to add gems to that installation, it's not recommended, as that would be wiped the next time the Studio JRuby version is updated. Instead, it is suggested that the gem be unpacked into the Ruble and referenced there. Below, we show how to use a JSON gem, and interpret a JSON url response from a Github API call.")]),e._v(" "),n("h2",{attrs:{id:"setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),n("p",[e._v("First, unpack the gem. Here we use the JSON gem from "),n("a",{attrs:{href:"http://flori.github.com/json/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://flori.github.com/json/"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"using-gem-unpack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-gem-unpack"}},[e._v("#")]),e._v(" Using 'gem unpack'")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Install the desired gem to your ruby installation if not already installed ("),n("strong",[e._v("`gem install json`")]),e._v(").")])]),e._v(" "),n("li",[n("p",[e._v("Change directories to the ruble's "),n("strong",[e._v("/lib")]),e._v(" folder.")])]),e._v(" "),n("li",[n("p",[e._v("Run `gem unpack json`, and then optionally rename the resulting subdirectory to be "),n("strong",[e._v("'json'")]),e._v(".")])])]),e._v(" "),n("h3",{attrs:{id:"manually-unzipping"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#manually-unzipping"}},[e._v("#")]),e._v(" Manually unzipping")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Download the source version of the gem as a .zip file.")])]),e._v(" "),n("li",[n("p",[e._v("Unzip the archive and rename it to "),n("strong",[e._v("'json'")]),e._v(".")])]),e._v(" "),n("li",[n("p",[e._v("Place it underneath the "),n("strong",[e._v("/lib")]),e._v(" folder in the ruble. You will see a structure like:")])])]),e._v(" "),n("p",[n("img",{attrs:{src:a(537),alt:"Screen_Shot_2011-12-27_at_1.21.00_PM"}})]),e._v(" "),n("p",[e._v("Now, we need to reference the gem. To this properly, we need to manipulate the load path. There are two options:")]),e._v(" "),n("h3",{attrs:{id:"manipulate-the-path-in-each-place-the-gem-is-referenced"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#manipulate-the-path-in-each-place-the-gem-is-referenced"}},[e._v("#")]),e._v(" Manipulate the path in each place the gem is referenced")]),e._v(" "),n("p",[e._v("Assuming we are creating a command in commands/commands.rb, we reference the JSON gem as:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$: << File.dirname(__FILE__) + '/../lib/json/lib'\nrequire 'json'\n")])])]),n("h3",{attrs:{id:"manipulate-the-path-globally-for-all-commands"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#manipulate-the-path-globally-for-all-commands"}},[e._v("#")]),e._v(" Manipulate the path globally for all commands")]),e._v(" "),n("p",[e._v("Here, we take advantage of the fact that items in the "),n("strong",[e._v('"lib"')]),e._v(" directory are automatically loaded.")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Create "),n("strong",[e._v("/lib/json.rb")])])]),e._v(" "),n("li",[n("p",[e._v("Add the following code://")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$: << File.dirname(__FILE__) + 'json/lib'\nrequire 'json'\n")])])])]),e._v(" "),n("li",[n("p",[e._v('Now, we can require "json" as normal in other commands')])])]),e._v(" "),n("h2",{attrs:{id:"the-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-code"}},[e._v("#")]),e._v(" The Code")]),e._v(" "),n("p",[e._v("In the snippet below, we manipulate the currently selected text to split it across lines and then wrap each line in a template using mirrored variables (the $1s in the template)")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("require 'ruble'\nrequire 'net/http'\nrequire 'json'\n\ncommand 'Find Related Git Repos' do |cmd|\n  cmd.scope = 'source'\n  cmd.output = :show_as_tooltip\n  cmd.input = :selection, :word\n  cmd.invoke do |context|\n     # call Github to find all repos that reference the selected text\n     url = \"http://github.com/api/v2/json/repos/search/#{URI.encode($stdin.gets)}\"\n     resp = Net::HTTP.get_response(URI.parse(url))\n     data = resp.body\n\n     result = JSON.parse(data)\n\n     # Create tooltip text\n     tooltip = \"\"\n     for k in 0...result[\"repositories\"].length\n       repo = result['repositories'][k]\n       tooltip << \"#{repo['name']}: #{repo['description']} (#{repo['url']})\\n\"\n     end\n     puts tooltip\n\n  end\nend\n")])])]),n("h2",{attrs:{id:"result"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#result"}},[e._v("#")]),e._v(" Result")]),e._v(" "),n("p",[e._v("Once created and activated, you will get something similar to this:")]),e._v(" "),n("p",[n("img",{attrs:{src:a(538),alt:"Screen_Shot_2011-12-27_at_1.40.01_PM"}})])])}),[],!1,null,null,null);t.default=r.exports},537:function(e,t,a){e.exports=a.p+"assets/img/Screen_Shot_2011-12-27_at_1.21.00_PM.312d626c.png"},538:function(e,t,a){e.exports=a.p+"assets/img/Screen_Shot_2011-12-27_at_1.40.01_PM.a2152027.png"}}]);