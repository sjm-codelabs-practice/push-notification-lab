/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

self.addEventListener("notificationclose", event => {
  const { notification } = event;
  const { primaryKey } = notification.data;

  console.log(`Closed notification: ${primaryKey}`);
});

self.addEventListener("notificationclick", event => {
  const { notification } = event;
  const { primaryKey } = notification.data;
  const { action } = event;

  if (action === "close") {
    notification.close();
  } else {
    self.clients.openWindow(`samples/page${primaryKey}.html`);
    notification.close();
  }

  // TODO 5.3 - close all notifications when one is clicked
});

// TODO 3.1 - add push event listener
