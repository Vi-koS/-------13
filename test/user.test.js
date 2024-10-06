import { expect } from 'chai';
import { fetchUsers } from "../script.js";
import fetch from 'node-fetch';
import sinon from 'sinon';

global.fetch = fetch;

describe('получение имен пользователей с сервера', function () {

   it('сравнение с моковым пользователем', async function () {
      const mockUser = [
         { name: 'Leanne Graham' },
         { name: 'Ervin Howell' },
         { name: 'Clementine Bauch' },
         { name: 'Patricia Lebsack' },
         { name: 'Chelsey Dietrich' },
         { name: 'Mrs. Dennis Schulist' },
         { name: 'Kurtis Weissnat' },
         { name: 'Nicholas Runolfsdottir V' },
         { name: 'Glenna Reichert' },
         { name: 'Clementina DuBuque' }
      ];

      let fetchStub;
      fetchStub = sinon.stub(global, 'fetch').resolves({
         ok: true,
         json: async () => mockUser

      })

      const names = await fetchUsers()


      expect(fetchStub.calledOnce).to.be.true
      expect(names).to.deep.equal(mockUser.map(user => user.name))
   })

   it('должен выбрасывать ошибку', async () => {
      try {
         await fetchUsers();
      } catch (error) {
         expect(error.message).to.equal('ошибка');
      }

   });
})