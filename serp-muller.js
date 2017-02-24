//Ok yes, I'm not great at naming functions
//Not hungry will remove rows with empties in the given column
//otherwise it removes the row whose specified column has a value
function eatEmpties(tableCol, target, hungry)
{
	if (!hungry)
	{
		if (tableCol.innerHTML.trim() == "") {
			target.remove();
		}
	}
	else
	{
		if (tableCol.innerHTML.trim() != "") {
			target.remove();
		}
	}
}

//This pulls serp type text out of the table column modal and into the column
function getSerpTypes(str)
{
	output = "";
	serpTypeHtml = $.parseHTML(str);

	var serps = $(serpTypeHtml).find('var');

	for (i = 0; i < serps.length; i++)
	{
		output += serps[i].innerText + ", ";
	}

	return output;
}

//Remove row 8 where values are found
$.each(
	$('#main_se_data_table tr td:nth-of-type(8)'), (
		function() {
			eatEmpties(this, $(this).parent(), true);
		}
	)
);

//Remove row 2 where no values are found
//Pull SERP text out of the modal and into the column
$.each(
	$('#main_se_data_table tr td:nth-of-type(2) .block'), (
		function() {
			eatEmpties(this, $(this).parent().parent(), false);

			var serps = getSerpTypes(unescape($(this).find("span").data("original-title"))).trim();
			var derps = serps.substring(0,serps.length-1);
			$(this).html(derps);
		}
	)
);
