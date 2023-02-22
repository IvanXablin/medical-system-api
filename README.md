# Тестовое задание для компании ROBOTMIA

---

#### Для запуска приложения нужен Docker (Docker Compose)

---

#### Инструкция по установке и запуску:

- Заходим в корень проекта и выполняем в терминале следующие команды:

```bash
$ docker-compose -up // собираем приложения в докер контейнер
  
$ docker exec mis-api-api-1 prisma migrate dev --name init // инициализируем таблицы в БД
```

- После выполения команд, переходим по URl: http://localhost:8081/
- После после перехода, должно быть форма входа 

> <img src="https://github.com/IvanXablin/mis-api/blob/master/docs/screenshots/s1.png" alt="drawing" width="1000"/>

- В форме входа в полях пользователь и пароль пишем root и авторизуемся

- Заходим в app-db и смотрим наличие таблиц, если они есть, то заполняем данными вручную таблицы: Doctor, Patient, Schedule

> <img src="https://github.com/IvanXablin/mis-api/blob/master/docs/screenshots/s2.png" alt="drawing" width="1000"/>

> <img src="https://github.com/IvanXablin/mis-api/blob/master/docs/screenshots/s3.png" alt="drawing" width="1000"/>

---

- Для взаимодействия с API, заходим в PostMan или Insomnia (ниже будут скриншоты для Insomnia)

> Чтобы зарегистрироваться пациента нужно обращаться к URL http://localhost:3000/api/patient/register и через POST запрос передавать JSON объект

> <img src="https://github.com/IvanXablin/mis-api/blob/master/docs/screenshots/s4.png" alt="drawing" width="1000"/>


> Чтобы создать запись нужно обращаться к URL http://localhost:3000/api/record/create и через POST запрос передавать JSON объект

> <img src="https://github.com/IvanXablin/mis-api/blob/master/docs/screenshots/s5.png" alt="drawing" width="1000"/>


> Чтобы создать запись нужно обращаться к URL http://localhost:3000/api/schedule/info?date='{{ date }}' через GET запрос

> <img src="https://github.com/IvanXablin/mis-api/blob/master/docs/screenshots/s6.png" alt="drawing" width="1000"/>

#### Для тестирования сервиса оповещений нужен сервис - https://ethereal.email/

- Заходи туда под тестовым аккаунтом

> Логин: kennedy.hammes@ethereal.email

> Пароль: btwy46qCCzwbSKZCZC

> <img src="https://github.com/IvanXablin/mis-api/blob/master/docs/screenshots/s7.png" alt="drawing" width="1000"/>

Переходим в раздел Messages и смотрим уведомления там (чтобы письма шли нужно в таблице Schedule поле timeFrom ставить за 2 часа или 1 день)

> <img src="https://github.com/IvanXablin/mis-api/blob/master/docs/screenshots/s8.png" alt="drawing" width="1000"/>

