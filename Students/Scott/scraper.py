from bs4 import BeautifulSoup, SoupStrainer
import requests

page = BeautifulSoup(requests.get("https://www.thefiftybest.com/spirits/best_bourbon/").text, 'html.parser')
bourbons = page.find('tbody').find_all('tr')
bourbon_data = []
for bourbon in bourbons:
    description = bourbon.find('td')
    name = description.find('a').text
    nose, palate, finish = [d.text.strip() for d in description.find_all('i')]
    bourbon_data.append({"name": name, "nose": nose, "palate": palate, "finish": finish})


print(bourbon_data)
with open("") as wf:
    wf.writelines()