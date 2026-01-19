export default {
	pageName: _.capitalize( appsmith.URL.pathname.replace("/edit").split("/")[3].split("-")[0])
}