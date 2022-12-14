import { IDoc } from '../app/models/doc';

export const docs: IDoc[] = [
  {
    id: 'yok0cpn5g7j0n1ck',
    author: {
      account: 'semenov_gn',
      fio: 'Семенов Геннадий Николаевич',
      post: 'Главный специалист',
    },
    docCode: 'bchqihg90v6viqq1ogak93dffrke19gm',
    docDate: '2018-09-27',
    docName: 'Заявление о внесении в реестр №271',
    docType: 'request',
    address: 'г. Москва, ул. Академика Королева, 32',
    status: 'registered',
    isSpecial: true,
  },
  {
    id: 'xyxepbuv9s45ake7',
    author: {
      account: 'antonov_ds',
      fio: 'Антонов Дмитрий Сергеевич',
      post: 'Специалист',
    },
    docCode: 'ag4r795cevrlmozxvtjfbjyw79ve1f7f',
    docDate: '2018-09-30',
    docName: 'Свидетельство об утверждении проекта планировки №0028',
    docType: 'certificate',
    address: 'г. Москва, 2-й Южнопортовый проезд, 19к1',
    status: 'accepted',
    isSpecial: false,
  },
  {
    id: 'a1thght7p61v5mev',
    author: null,
    docCode: '93rdd6y56gn5t1xdgxm1ow9m9z9rq7ip',
    docDate: '2018-10-02',
    docName: 'Заявление о внесении в реестр №272',
    docType: 'certificate',
    address: 'г. Москва, Партийный пер., 7с2',
    status: 'registered',
    isSpecial: false,
  },
];
