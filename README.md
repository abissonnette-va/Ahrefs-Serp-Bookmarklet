# Ahrefs-Serp-Bookmarklet
This bookmarklet for AHrefs allows us to pull out available featured serps from their reports and then filter better in Google Sheets

### Usage
Bookmark this lovely code:

    javascript:void%20function(){function%20t(t,e,i){i%3F%22%22!=t.innerHTML.trim()%26%26e.remove():%22%22==t.innerHTML.trim()%26%26e.remove()}function%20e(t){output=%22%22,serpTypeHtml=$.parseHTML(t);var%20e=$(serpTypeHtml).find(%22var%22);for(i=0;i%3Ce.length;i++)output+=e[i].innerText+%22,%20%22;return%20output}$.each($(%22%23main_se_data_table%20tr%20td:nth-of-type(8)%22),function(){t(this,$(this).parent(),!0)}),$.each($(%22%23main_se_data_table%20tr%20td:nth-of-type(7)%22),function(){var%20t=$(this).find(%22span.position%22),e=$(this).find(%22span.inc%22);if(0!=e.length){t.text(%22%22+t.text()+%22,%20%22);var%20i=e.data(%22original-title%22).replace(%22Previous%20position:%20%22,%22%22).replace(%22%20Date:%20%22,%22,%20%22);e.text(e.text()+%22,%20%22+i)}else{var%20e=$(this).find(%22span.desc%22);if(0!=e.length){t.text(%22%22+t.text()+%22,%20%22);var%20i=e.data(%22original-title%22).replace(%22Previous%20position:%20%22,%22%22).replace(%22%20Date:%20%22,%22,%20%22);e.text(e.text()+%22,%20%22+i)}}}),$.each($(%22%23main_se_data_table%20tr%20td:nth-of-type(2)%20.block%22),function(){t(this,$(this).parent().parent(),!1);var%20i=e(unescape($(this).find(%22span%22).data(%22original-title%22))).trim(),n=i.substring(0,i.length-1);$(this).html(n)}),$.each($(%22%23main_se_data_table%20tr%20td:nth-of-type(9)%22),function(){$(this).html(this.innerText.replace(%22lockwww%22,%22www%22))}),$(%22.bg-lightyellow%22).remove(),$(%22tr[name='site_explorer_data_rows']:hidden%22).remove()}();

Execute the code on this report in Ahrefs. This report is incredibly handy but lacks an export with the serp text available as well no direct way to filter out pages with their URL in the site text.
https://ahrefs.com/positions-explorer/organic-keywords/v5/domain/us/0-10/100-0/all/all/all/all/all/1/volume_desc?target=[YourTargetHere.com]

Once you've formatted the report you can use a chrome extension like Table Capture to export your data to Google Sheets: https://chrome.google.com/webstore/detail/table-capture/iebpjdmgckacbodjpijphcplhebcmeop/
