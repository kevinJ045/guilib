import { Body, Button, Style, ButtonSegment, Component, DataTable, IconButton, IconLink, Icons, LayoutBuilder, Link, Page, Sidebar, Swiper, SwiperWrapper, Tab, TabBar, TabsWrapper, Tag, Text, Toolbar, View, Widget, createApp, toast, BreadCrumbs, List, ListItem, MessageBar, createPopover, createPopup, RangeSlider, Icon } from "./index.js";

console.log(Icons.after);

new ButtonSegment({
	children: [
		new Button('Hello'),
		new Button('Hello',{
			icon: Icons.after.chevron_right,
			type: 'transparent'
		}),
	]
}).to(document.body);

new Tag({
	title: "Hiii",
	icon: Icons.add
})
.to(document.body);