# immobilienscout
## What does the script do
* It will continuosly refresh the immobilienscout website and automaticaly open a new tab with the apartment ad, so that you can be on of the first ones to apply. 
* Because landlord remove pictures from the immobilienscout, the script will also add a button to download the pictures of the apartment that you liked.
* Because this is a bot like behaviour, the immobiliensout will block some refreshes and ask for captcha. Script will catch this event and bring your attention to it.

## How to Install
1. Open following [immobilienscout](https://www.immobilienscout24.de/Suche/de/berlin/berlin/mitte/wohnung-mieten) page and define your filters. Copy the URL with all GET parameters and save somewhere or make a bookmark
2. Download chrome and add following extension https://chrome.google.com/webstore/detail/javascript-injector/
3. Once you have the extension installed, open the extension management page and add following injection rules for urls `immobilienscout` and `pictures.immobilienscout24`
your page should look like this 
![Screenshot 2023-05-09 at 18.55.09.png](Screenshot%202023-05-09%20at%2018.55.09.png)
4. Copy paste the https://github.com/zhorzhz/immobilienscout/blob/main/picture.immobilienscout.js code into injector extension for url `pictures.immobilienscout24`
5. Copy paste the https://github.com/zhorzhz/immobilienscout/blob/main/immobilienscout.js code into injector extension for url `immobilienscout24`
6. Open [Immobilienscout]([immobilienscout](https://www.immobilienscout24.de/Suche/de/berlin/berlin/mitte/wohnung-mieten)) bookmark or the URL with your filters.
7. Make sure to keep the Immobilienscout tab active, so if you are using chrome for other things, keep this window active in background, never minimize or close it. 

## How to apply
1. Once a new apartment was published that matches your criterias the website will open a new tab with the ad and make a bleeping sound. Even if you are on another app, you will be redirected to the chrome active tab. if you like the apartment then you can apply and click the download images button, becuase landlord tend to delete images, so after a while you don't know what you applied for. 
![Screenshot%202023-05-09%20at%2019.08.40.png](Screenshot%202023-05-09%20at%2019.08.40.png)
2. Once you made your decision close the tab and go back to the search tab with filters, to make sure that you will not be alerted next time for the same ad click the hide button 
![Screenshot%202023-05-09%20at%2019.10.55.png](Screenshot%202023-05-09%20at%2019.10.55.png)

## Notes:
1. If the immobilienscout thinks you are a bot, script will open a new tab to bring your atention to it. Just go to the page that requires captcha and pass it. 
2. If the script is stuck, just refresh the page and it will start working again. 
