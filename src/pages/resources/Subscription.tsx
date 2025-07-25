// This file is auto-generated by generate_components so do not edit manually

/**
Subscription
    The subscription resource is used to define a push-based subscription from a
    server to another system. Once a subscription is registered with the server,
    the server checks every resource that is created or updated, and if the
    resource matches the given criteria, it sends a message on the defined
    "channel" so that another system can take an appropriate action.
    If the element is present, it must have either a @value, an @id, or extensions
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { TSubscription } from '../../types/resources/Subscription';

// Import all the partial resource
import Partials from '../../partials';
import { IdentifierSystem } from '../../utils/identifierSystem';

const Subscription = ({ resource }: { resource: TSubscription }): React.ReactElement => {
    const tagUUID = resource?.meta?.tag?.find((s) => s.system === IdentifierSystem.uuid)?.code;
    const uuid = tagUUID ? tagUUID : resource.id;

    return (
        <>
            <Link title="Direct link to Resource" to={`/4_0_0/${resource.resourceType}/${uuid}`}>
                {resource.resourceType}/{uuid}
            </Link>
            {
                resource.meta &&
                <Partials.Meta
                    meta={resource.meta}
                    name='Meta'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='meta'
                />
            }
            {
                resource.implicitRules &&
                <Partials.Uri
                    uri={resource.implicitRules}
                    name='Implicit Rules'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='implicit-rules'
                />
            }
            {
                resource.language &&
                <Partials.Code code={resource.language} name='Language'/>
            }
            {
                resource.text &&
                <Partials.Narrative
                    narrative={resource.text}
                    name='Text'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='text'
                />
            }
            {
                resource.extension &&
                <Partials.Extension
                    extension={resource.extension}
                    name='Extension'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='extension'
                />
            }
            {
                resource.modifierExtension &&
                <Partials.Extension
                    extension={resource.modifierExtension}
                    name='Modifier Extension'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='modifier-extension'
                />
            }
            {
                resource.status &&
                <Partials.Code code={resource.status} name='Status'/>
            }
            {
                resource.contact &&
                <Partials.ContactPoint
                    contactPoint={resource.contact}
                    name='Contact'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='contact'
                />
            }
            {
                resource.end &&
                <Partials.Instant
                    instant={resource.end}
                    name='End'
                    resourceType={resource.resourceType}
                    id={uuid}
                    searchParameter='end'
                />
            }
        </>
    );
};

export default Subscription;
