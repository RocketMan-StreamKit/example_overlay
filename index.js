network.endpoints.create('params', 'GET', 'onGetParams');

events.On('onGetParams', async () => {
  return api.config.getParams();
});

GenerateConfig([
  {
    key: 'flashColor',
    type: 'color',
    default: '#ff1744',
    editor: {
      label: {
        en: 'Flash color',
        ru: 'Цвет вспышки',
        uk: 'Колір спалаху',
      },
    },
  },
  {
    key: 'message',
    type: 'text',
    default: 'BOOM!',
    editor: {
      label: {
        en: 'Message text',
        ru: 'Текст сообщения',
        uk: 'Текст повідомлення',
      },
    },
  },
  {
    key: 'playSound',
    type: 'boolean',
    default: true,
    editor: {
      label: {
        en: 'Play sound',
        ru: 'Воспроизводить звук',
        uk: 'Відтворювати звук',
      },
    },
  },
]);
