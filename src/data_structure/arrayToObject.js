
module.exports = function() {
	let arr = [
		{
			title: "浙江省",
			id: 200,
		},
		{
			title: "金华市",
			id: 2001,
			pid: 200,
		},
		{
			title: "衢州市",
			id: 2002,
			pid: 200,
		},
		{
			title: "温州市",
			id: 2003,
			pid: 200,
		},
		{
			title: "县城1",
			id: 20011,
			pid: 2001,
		},
			{
			title: "县城2",
			id: 20021,
			pid: 2002,
		},
			{
			title: "县城3",
			id: 20022,
			pid: 2002,
		},
	]

	function getTree(arr) {
		let mydata = {};
		let root = {}
		arr.forEach((item) => {
			item.children = [];
			mydata[item.id] = item;
		})
		arr.forEach((item) => {
			if(!item.pid) {
				root = item;
			} else {
				mydata[item.pid].children.push(item);
			}
		})
		return root;
	}

	return getTree(arr)
}