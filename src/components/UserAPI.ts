import { UserAccount, UserProps } from './UserSlice';

export async function getAccount(_id: string) {    
    return new Promise<{ data: UserProps }>((resolve) =>
    setTimeout(() => resolve({ data: 
        {
            _id: '10',
            name: 'Harry Styles',
            accountType: 'admin'
        }
    }), 100)
  );
}

export async function getAllAccounts() {    
    return new Promise<{ data: UserProps[] }>((resolve) =>
    setTimeout(() => resolve({ data: 
        [
            {
                _id: '10',
                name: 'Harry Styles',
                accountType: 'admin'
            },
            {
                _id: '20',
                name: 'Barry Styles',
                accountType: 'admin'
            },
            {
                _id: '30',
                name: 'Larry Styles',
                accountType: 'admin'
            },
            {
                _id: '40',
                name: 'Marry Styles',
                accountType: 'admin'
            }
        ]
    }), 100)
  );
}