import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { fetchAllUsersAsync, fetchUsersAsync } from "./UserSlice";

const Users = () => {
    const dispatch = useAppDispatch();
    const { user, status, users } = useAppSelector(state => state.user);

    useEffect(() => {
        fetchData();
    }, [dispatch])

    const fetchData = async () => {
        await dispatch(fetchUsersAsync('10'));
        await dispatch(fetchAllUsersAsync());
    }

    if(status === 'loading') return <div>Loading..</div>

  return (
    <div>
        <h1>Users</h1>
        {
            Object.keys(user).length > 0 ?
                <div>
                    <h3>User Found:</h3>
                    <h5>
                        {user.name}
                    </h5>
                    <h5>
                        {user.accountType}
                    </h5>
                    <h5>
                        {user._id}
                    </h5>
                </div>
            :
                <h3>No Users Found</h3>
        }
        {
            Object.keys(users).length > 0 ?
                users.map((item) => {
                    return (
                        <div>
                        <h3>All Users:</h3>
                        <h5>
                            {item.name}
                        </h5>
                        <h5>
                            {item.accountType}
                        </h5>
                        <h5>
                            {item._id}
                        </h5>
                    </div>
                    )
                })
            :
                <h3>Unable to retrieve all Users</h3>
        }
    </div>
  )
}

export default Users