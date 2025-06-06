---
title: Настройка Altruist
contributors: [tubleronchik]
---

**Это руководство проведет вас через процесс настройки и активации датчика Altruist Outdoor. Вы подключите датчик к Wi-Fi, настроите его местоположение и активируете подписку с использованием XRT токенов. Также предоставлены инструкции по интеграции датчика с Home Assistant через HACS или ручную установку.**

{% roboWikiNote {type: "warning"}%} Все устройства от Robonomics можно приобрести на официальном [веб-сайте](https://robonomics.network/devices/).{% endroboWikiNote %}

## Активация подписки Robonomics

{% roboWikiNote {type: "okay"} %}Для выполнения этого шага убедитесь, что у вас есть как минимум 2-3 XRT токена на вашем `Robonomics Polkadot` аккаунте.{% endroboWikiNote %}

1) Перейдите на [страницу подписки](https://robonomics.app/#/rws-buy) Robonomics dApp. 
2) Нажмите на **Аккаунт** и подключите ваш кошелек. Ваш адрес аккаунта и баланс будут отображены.
Если у вас нет аккаунта, следуйте [этому руководству](https://wiki.robonomics.network/docs/create-account-in-dapp/), чтобы создать его.

{% roboWikiPicture {src:"docs/altruist/altruist_syb_buy.jpg", alt:"страница подписки"} %}{% endroboWikiPicture %}

3) Нажмите `КУПИТЬ ПОДПИСКУ` и подпишите транзакцию. **Дождитесь завершения процесса активации**. 
4) После активации вы будете перенаправлены на **страницу настройки**, где сможете увидеть название вашей подписки и дату ее истечения.

{% roboWikiPicture {src:"docs/altruist/altruist_setup_page.jpg", alt:"страница настройки подписки"} %}{% endroboWikiPicture %}

5) **Сохраните адрес вашего аккаунта** — он понадобится вам при настройке датчика. Вы можете скопировать его из раздела "ВЛАДЕЛЕЦ" или нажав на имя вашего аккаунта в правом верхнем углу и выбрав кнопку копирования.

## Настройка датчика

{% roboWikiNote {type: "warning", title: "ИНФОРМАЦИЯ"}%} Датчик можно подключить только к сети Wi-Fi 2.4GHz.{% endroboWikiNote %}

1) **Подключите датчик** к розетке.
2) Плата создаст сеть Wi-Fi с именем Altruist-xxxxxxxxx. Подключитесь к ней с вашего телефона или компьютера. Вам должно автоматически предложить открыть окно авторизации. 
- Если нет, откройте браузер и перейдите на 192.168.4.1.

{% roboWikiPicture {src:"docs/altruist/networks.png", alt:"altruist-сенсор", small: true} %}{% endroboWikiPicture %}

3) **Настройте параметры Wi-Fi**:
- Выберите вашу сеть Wi-Fi из списка или введите её вручную, если она не отображается.
- Введите пароль в поле "НАСТРОЙКИ WI-FI".
- Если у вас несколько устройств Altruist в одной сети, измените локальное имя хоста. После настройки WiFi вы сможете подключиться к вашему датчику, используя это имя хоста.

{% roboWikiPicture {src:"docs/altruist/wifi_creds.png", alt:"altruist-сенсор", small: true} %}{% endroboWikiPicture %}

4) **Сохранить конфигурацию**
- Нажмите кнопку `Сохранить конфигурацию и перезапустить` и дождитесь подключения датчика к WiFi. После подключения он отобразит свой новый IP-адрес — скопируйте его, так как это альтернативный способ подключения к вашим датчикам после настройки.

{% roboWikiPicture {src:"docs/altruist/connected.png", alt:"altruist-sensor", small: true} %}{% endroboWikiPicture %}

5) **Введите ваши данные Robonomics**:
- Откройте веб-интерфейс Altruist по адресу http://altruist.local (или используйте ваше пользовательское локальное имя хоста, добавив `.local`, если вы его изменили). Затем перейдите на страницу `Конфигурация`.
- В разделе `Robonomics` вставьте адрес владельца RWS, который вы скопировали ранее, в соответствующее поле.

6) **Установите местоположение датчика**:
- В разделе `GPS и коррекция температуры` введите координаты места установки датчика.
- Вы можете найти координаты, используя онлайн-карты, или преобразовать адрес в широту/долготу, используя [эту ссылку.](https://www.latlong.net/convert-address-to-lat-long.html)

{% roboWikiNote {type: "warning", title: "ПРЕДУПРЕЖДЕНИЕ"}%}Координаты датчика будут отображаться на общедоступной карте. Если вы не хотите показывать вашу личную информацию, укажите близкие, но не точные координаты.{% endroboWikiNote %}

{% roboWikiPicture {src:"docs/altruist/robo-gps.png", alt:"altruist-sensor-wifi", small: true} %}{% endroboWikiPicture %}

7) **Скопируйте "Robonomics Address" Altruist**:
- Вы найдете это в верхней части страницы. Сохраните для последнего шага.

{% roboWikiPicture {src:"docs/altruist/address.jpg", alt:"адрес альтруиста", small: true} %}{% endroboWikiPicture %}

8) Нажмите "**Сохранить конфигурацию и перезагрузить**" внизу страницы. Плата перезагрузится.

## Активация Altruist
Последний шаг в процессе настройки — добавление **адреса Altruist** в вашу **подписку Robonomics**.

1) Вернитесь на [страницу настройки](https://robonomics.app/#/rws-setup).

2) Прокрутите вниз до раздела "**Пользователи в подписке**".

3) В поле "**Добавить пользователя**" вставьте **адрес Altruist Robonomics**, который вы скопировали ранее.

{% roboWikiPicture {src:"docs/altruist/add_user.jpg", alt:"добавить пользователя"} %}{% endroboWikiPicture %}

4) Нажмите **кнопку плюс (+)** и подпишите сообщение.

5) Дождитесь завершения операции.

Вот и все! Ваша настройка завершена. 🎉

Теперь вы можете найти своего Altruist на карте [Robonomics Sensors Social](https://sensors.social/#). 🚀

{% roboWikiPicture {src:"docs/altruist/map.jpg", alt:"карта сенсоров"} %}{% endroboWikiPicture %}

## Home Assistant

Есть два способа добавить **Altruist** в **Home Assistant**:

### Вариант 1: HACS (рекомендуется)

Самый простой способ добавить **Altruist** — через **HACS**.Вы можете найти краткое руководство по настройке [здесь](https://hacs.xyz/docs/use/)

**Шаги**:
1) После установки HACS откройте его.

2) Нажмите на **три точки** в правом верхнем углу и выберите "**Custom repositories**".

3) В появившемся окне введите следующий URL:

```
https://github.com/airalab/altruist-homeassistant-integration
```
4) Установите тип на "**Integration**" и нажмите "**ADD**".

{% roboWikiPicture {src:"docs/altruist/hacs.jpg", alt:"altruist-add"} %}{% endroboWikiPicture %}

5) Найдите интеграцию **Altruist Sensor**.

6) Нажмите кнопку **Download**, затем перезапустите **Home Assistant** после установки интеграции.

{% roboWikiPicture {src:"docs/altruist/integration.jpg", alt:"altruist-hacs"} %}{% endroboWikiPicture %}

### Вариант 2: Ручная установка

1) Под пользователем `homeassistant` клонируйте репозиторий проекта:

{% codeHelper { copy: true}%}

```shell
  git clone https://github.com/airalab/altruist-homeassistant-integration.git
```

{% endcodeHelper %}

2) Если у вас уже есть какие-либо пользовательские интеграции, переместите папку `altruist` в ваш каталог `custom_components`:

{% codeHelper { copy: true}%}

```
cd altruist-homeassistant-integration
mv custom_components/altruist ~/.homeassistant/custom_components/
```

{% endcodeHelper %}

3) Если у вас **нет** пользовательских интеграций, переместите всю custom_components каталог:

{% codeHelper { copy: true}%}

 ```
cd altruist-homeassistant-integration
mv custom_components/ ~/.homeassistant/
```

{% endcodeHelper %}

## Конфигурация

После установки и перезапуска Home Assistant, интеграция автоматически обнаружит Altruist в вашей сети.

1) Перейдите в **Настройки → Устройства и Сервисы**.

2) Добавьте **Датчик Altruist**.

{% roboWikiPicture {src:"docs/altruist/add_altruist.jpg", alt:"обнаружить altruist"} %}{% endroboWikiPicture %}

Готово! 🚀 Ваш датчик Altruist теперь интегрирован с Home Assistant.