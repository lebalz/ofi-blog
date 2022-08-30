import useIsBrowser from '@docusaurus/useIsBrowser';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useSolution, useStore } from '../../stores/hooks';
import Loader from '../shared/Loader';
import Details from "@theme/Details";
import clsx from 'clsx';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

interface Props {
    webKey: string;
    title?: string;
    open?: boolean;
    children?: React.ReactNode;
}

const Icon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="26" viewBox="0 0 512 512">
            <path
                fillRule="evenodd"
                d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"
            />
        </svg>
    );
};

interface PolicyBadgeProps {
    onRemove: () => void;
    name: string;
    color: string;
}

const PolicyBadge = observer((props: PolicyBadgeProps) => {
    return (
        <span className={clsx(styles.policy, 'badge', `badge--${props.color}`)}>
            {props.name}{' '}
            <FontAwesomeIcon icon={faTimesCircle} onClick={props.onRemove} />
        </span>
    );
});

interface ConfigProps {
    webKey: string;
}
const Config = observer((props: ConfigProps) => {
    const [klass, setKlass] = React.useState('');
    const [group, setGroup] = React.useState('');
    const [user, setUser] = React.useState('');
    const store = useStore('policyStore');
    const adminStore = useStore('adminStore');
    const userStore = useStore('userStore');
    const policy = store.findPolicy(props.webKey);

    if (!policy) {
        return null;
    }
    return (
        <div className={clsx(styles.configContainer)}>
            <div className={clsx(styles.showControl)}>
                <FontAwesomeIcon
                    icon={adminStore.showAdminElement('policy_opts') ? faTimesCircle : faEllipsisH}
                    onClick={() => {
                        adminStore.toggleAdminElements('policy_opts')
                    }}
                />
            </div>
            {adminStore.showAdminElement('policy_opts') && (
                <div className={clsx(styles.config)}>
                    <div className={clsx(styles.permissions)}>
                        {Array.from(policy.klasses).map((g, idx) => {
                            return (
                                <PolicyBadge
                                    key={idx}
                                    name={g}
                                    onRemove={() => policy.removePermission(g, 'class')}
                                    color="success"
                                />
                            );
                        })}
                        {Array.from(policy.groups).map((g, idx) => {
                            return (
                                <PolicyBadge
                                    key={idx}
                                    name={g}
                                    onRemove={() => policy.removePermission(g, 'group')}
                                    color="danger"
                                />
                            );
                        })}
                        {Array.from(policy.users).map((g, idx) => {
                            return (
                                <PolicyBadge
                                    key={idx}
                                    name={g}
                                    onRemove={() => policy.removePermission(g, 'user')}
                                    color="primary"
                                />
                            );
                        })}
                    </div>
                    <div className={clsx(styles.update)}>
                        <input
                            type="text"
                            placeholder="Klasse"
                            value={klass}
                            onChange={(e) => setKlass(e.target.value)}
                            disabled={policy.locked}
                            list="solution-policy-for-classes"
                        />
                        <datalist id="solution-policy-for-classes">
                            {userStore.klasses.map((kl, idx) => {
                                return <option key={idx} value={kl} />;
                            })}
                        </datalist>
                        <button
                            disabled={policy.locked}
                            onClick={() => {
                                policy.addPermission(klass, 'class');
                                setKlass('');
                            }}
                        >
                            Add
                        </button>
                        <input
                            type="text"
                            placeholder="Gruppe"
                            value={group}
                            onChange={(e) => setGroup(e.target.value)}
                            disabled={policy.locked}
                            list="solution-policy-for-groups"
                        />
                        <datalist id="solution-policy-for-groups">
                            {Array.from(new Set([...userStore.groups, ...store.groups])).map((g, idx) => {
                                return <option key={idx} value={g} />;
                            })}
                        </datalist>
                        <button
                            disabled={policy.locked}
                            onClick={() => {
                                policy.addPermission(group, 'group');
                                setGroup('');
                            }}
                        >
                            Add
                        </button>
                        <input
                            type="email"
                            placeholder="User"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            disabled={policy.locked}
                            list="solution-policy-for-users"
                        />
                        <datalist id="solution-policy-for-users">
                            {userStore.users.map((u, idx) => {
                                return <option key={idx} value={u.email} />;
                            })}
                        </datalist>
                        <button
                            disabled={policy.locked}
                            onClick={() => {
                                policy.addPermission(user, 'user');
                                setUser('');
                            }}
                        >
                            Add
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
});

const Solution = observer((props: Props) => {
    const store = useStore('policyStore');
    const userStore = useStore('userStore');
    const adminStore = useStore('adminStore');
    const inBrowser = useIsBrowser();
    useSolution(props.webKey);

    if (!inBrowser) {
        return <div>SSR</div>;
    }
    const model = store.find(props.webKey);

    if (!model) {
        return <Loader />;
    }
    console.log(props.open || adminStore.showPolicyOptions)
    return (
        <div data--web-key={props.webKey} className={clsx(styles.wrapper, 'solution-wrapper')}>
            {model.show || userStore.current?.admin ? (
                <Details
                    summary={
                        <summary>
                            {props.title || 'Lösung'} <Icon />
                            {!model.show && <span className="badge badge--secondary">Hidden</span>}
                        </summary>
                    }
                    className={clsx('alert alert--success', styles.solution)}
                    open={props.open || adminStore.showSolutions}
                    key={`poly-${props.open || adminStore.showSolutions}`}
                >
                    {userStore.current?.admin && <Config webKey={model.webKey} />}
                    {props.children}
                </Details>
            ) : (
                <div className={clsx('alert', styles.disabled)}>
                    {props.title || 'Lösung'} (nicht freigeschaltet) <Icon />
                </div>
            )}
        </div>
    );
});

export default Solution;
