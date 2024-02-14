import React from 'react';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/hooks';
import styles from './styles.module.scss';
import { runInAction } from 'mobx';
import { faArrowDown, faArrowUp, faTimesCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from '@mdi/react';
import { mdiArrowDown, mdiArrowUp, mdiArrowUpDown } from '@mdi/js';



export type SortCol = 'id' | 'email' | 'created_at';
interface SortProps {
    column: SortCol;
}

const SortArrow = observer((props: SortProps) => {
    const userStore = useStore('userStore');
    return (
        <span
            className={styles.sort}
            onClick={() => {
                runInAction(() => {
                    if (userStore.sortColumn !== props.column) {
                        userStore.sortColumn = props.column;
                        userStore.sortOrder = 'asc';
                    } else {
                        userStore.sortOrder = userStore.sortOrder === 'asc' ? 'desc' : 'asc';
                    }
                });
            }}
        >
            {userStore.sortColumn === props.column ? (
                <Icon path={userStore.sortOrder === 'asc' ? mdiArrowDown : mdiArrowUp} size={0.8} />
            ) : (
                <Icon path={mdiArrowUpDown} size={0.6} rotate={90} />
            )}
        </span>
    );
});

interface GroupBadgeInterface {
    onRemove: () => void;
    name: string;
}

const GroupBadge = observer((props: GroupBadgeInterface) => {
    return (
        <span className={clsx(styles.group, 'badge', 'badge--primary')}>
            {props.name}
            <FontAwesomeIcon icon={faTimesCircle} onClick={props.onRemove} />
        </span>
    );
});


const UserTable = observer(() => {
    const [newGroup, setNewGroup] = React.useState('');
    const [newKlass, setNewKlass] = React.useState('');
    const userStore = useStore('userStore');
    const policyStore = useStore('policyStore');
    const { current } = userStore;
    if (!current || !current.admin) {
        return null;
    }
    return (
        <div className={styles.users}>
            <h3>Benutzer:in</h3>
            <input
                type="text"
                placeholder="Gruppe"
                value={newGroup}
                onChange={(e) => setNewGroup(e.target.value)}
            />
            <button
                onClick={() => {
                    userStore.createGroup(newGroup);
                    setNewGroup('');
                }}
            >
                Add
            </button>
            <input
                type="text"
                placeholder="Klasse"
                value={newKlass}
                onChange={(e) => setNewKlass(e.target.value)}
            />
            <button
                onClick={() => {
                    userStore.createKlass(newKlass);
                    setNewKlass('');
                }}
            >
                Add
            </button>
            <table>
                <thead>
                    <tr>
                        <th>
                            <SortArrow column="id" />
                            Id</th>
                        <th>
                            <SortArrow column="email" />
                            Email
                        </th>
                        <th>
                            <div className="dropdown dropdown--hoverable">
                                <button
                                    className={clsx(styles.button, 'button', 'button--primary', 'button--sm')}
                                >
                                    {userStore.filterKlasse || 'Klasse'}
                                </button>
                                <ul className="dropdown__menu">
                                    {userStore.klasses.map((klass, idx) => {
                                        return (
                                            <li
                                                className="dropdown__link"
                                                key={idx}
                                                onClick={() => {
                                                    runInAction(() => {
                                                        userStore.filterKlasse = klass;
                                                    });
                                                }}
                                            >
                                                {klass || 'null'}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </th>
                        <th>
                        <div className="dropdown dropdown--hoverable">
                                <button
                                    className={clsx(styles.button, 'button', 'button--primary', 'button--sm')}
                                >
                                    {userStore.filterGroup || 'Gruppe'}
                                </button>
                                <ul className="dropdown__menu">
                                    {Array.from(new Set([undefined, ...userStore.groups, ...policyStore.groups])).map((group, idx) => {
                                        return (
                                            <li
                                                className="dropdown__link"
                                                key={idx}
                                                onClick={() => {
                                                    runInAction(() => {
                                                        userStore.filterGroup = group;
                                                    });
                                                }}
                                            >
                                                {group || 'null'}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </th>
                        <th>Admin?</th>
                        <th>
                        <SortArrow column="created_at" />
                            Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {userStore.filteredUsers.map((user, idx) => (
                        <tr key={idx}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>
                                <div className="dropdown dropdown--hoverable">
                                    <button
                                        className={clsx(
                                            styles.button,
                                            'button',
                                            'button--secondary',
                                            'button--sm'
                                        )}
                                    >
                                        {user.klasse || 'null'}
                                    </button>
                                    <ul className="dropdown__menu">
                                        {userStore.klasses.map((klass, idx) => {
                                            return (
                                                <li
                                                    className="dropdown__link"
                                                    key={idx}
                                                    onClick={() => {
                                                        runInAction(() => {
                                                            userStore.setKlasse(user, klass);
                                                        });
                                                    }}
                                                >
                                                    {klass || 'null'}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </td>
                            <td>
                                {user.groups.map((g, idx) => {
                                    return (
                                        <GroupBadge
                                            key={idx}
                                            name={g}
                                            onRemove={() => userStore.removeGroup(user, g)}
                                        />
                                    );
                                })}
                                <div className="dropdown dropdown--hoverable">
                                    <button
                                        className={clsx(
                                            styles.button,
                                            'button',
                                            'button--secondary',
                                            'button--sm'
                                        )}
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                    <ul className="dropdown__menu">
                                        {Array.from(new Set([undefined, ...userStore.groups, ...policyStore.groups])).map((group, idx) => {
                                            return (
                                                <li
                                                    className={clsx('dropdown__link')}
                                                    key={idx}
                                                    onClick={() => {
                                                        runInAction(() => {
                                                            userStore.addGroup(user, group);
                                                        });
                                                    }}
                                                >
                                                    {group}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </td>
                            <td>{user.admin && <span className="badge badge--primary">Admin</span>}</td>
                            <td>{user.createdAt.toISOString().slice(0, 10)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
});

export default UserTable;
