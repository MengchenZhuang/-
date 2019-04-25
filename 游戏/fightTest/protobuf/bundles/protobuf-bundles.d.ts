type Long = protobuf.Long;
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace com. */
declare namespace com {

    /** Namespace im. */
    namespace im {

        /** Namespace common. */
        namespace common {

            /** Namespace packets. */
            namespace packets {

                /** 聊天类型 */
                enum ChatType {
                    CHAT_TYPE_UNKNOW = 0,
                    CHAT_TYPE_PUBLIC = 1,
                    CHAT_TYPE_PRIVATE = 2
                }

                /** Properties of a ChatReqBody. */
                interface IChatReqBody {

                    /** ChatReqBody time */
                    time?: (number|Long|null);

                    /** ChatReqBody type */
                    type?: (com.im.common.packets.ChatType|null);

                    /** ChatReqBody text */
                    text?: (string|null);

                    /** ChatReqBody group */
                    group?: (string|null);

                    /** ChatReqBody toId */
                    toId?: (number|null);

                    /** ChatReqBody toNick */
                    toNick?: (string|null);
                }

                /** 聊天请求 */
                class ChatReqBody implements IChatReqBody {

                    /**
                     * Constructs a new ChatReqBody.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.im.common.packets.IChatReqBody);

                    /** ChatReqBody time. */
                    public time: (number|Long);

                    /** ChatReqBody type. */
                    public type: com.im.common.packets.ChatType;

                    /** ChatReqBody text. */
                    public text: string;

                    /** ChatReqBody group. */
                    public group: string;

                    /** ChatReqBody toId. */
                    public toId: number;

                    /** ChatReqBody toNick. */
                    public toNick: string;

                    /**
                     * Creates a new ChatReqBody instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChatReqBody instance
                     */
                    public static create(properties?: com.im.common.packets.IChatReqBody): com.im.common.packets.ChatReqBody;

                    /**
                     * Encodes the specified ChatReqBody message. Does not implicitly {@link com.im.common.packets.ChatReqBody.verify|verify} messages.
                     * @param message ChatReqBody message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.im.common.packets.IChatReqBody, writer?: protobuf.Writer): protobuf.Writer;

                    /**
                     * Encodes the specified ChatReqBody message, length delimited. Does not implicitly {@link com.im.common.packets.ChatReqBody.verify|verify} messages.
                     * @param message ChatReqBody message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.im.common.packets.IChatReqBody, writer?: protobuf.Writer): protobuf.Writer;

                    /**
                     * Decodes a ChatReqBody message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChatReqBody
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.im.common.packets.ChatReqBody;

                    /**
                     * Decodes a ChatReqBody message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChatReqBody
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.im.common.packets.ChatReqBody;

                    /**
                     * Verifies a ChatReqBody message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);
                }

                /** Properties of a ChatRespBody. */
                interface IChatRespBody {

                    /** ChatRespBody time */
                    time?: (number|Long|null);

                    /** ChatRespBody type */
                    type?: (com.im.common.packets.ChatType|null);

                    /** ChatRespBody text */
                    text?: (string|null);

                    /** ChatRespBody fromId */
                    fromId?: (number|null);

                    /** ChatRespBody fromNick */
                    fromNick?: (string|null);

                    /** ChatRespBody toId */
                    toId?: (number|null);

                    /** ChatRespBody toNick */
                    toNick?: (string|null);

                    /** ChatRespBody group */
                    group?: (string|null);
                }

                /** 聊天响应 */
                class ChatRespBody implements IChatRespBody {

                    /**
                     * Constructs a new ChatRespBody.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.im.common.packets.IChatRespBody);

                    /** ChatRespBody time. */
                    public time: (number|Long);

                    /** ChatRespBody type. */
                    public type: com.im.common.packets.ChatType;

                    /** ChatRespBody text. */
                    public text: string;

                    /** ChatRespBody fromId. */
                    public fromId: number;

                    /** ChatRespBody fromNick. */
                    public fromNick: string;

                    /** ChatRespBody toId. */
                    public toId: number;

                    /** ChatRespBody toNick. */
                    public toNick: string;

                    /** ChatRespBody group. */
                    public group: string;

                    /**
                     * Creates a new ChatRespBody instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChatRespBody instance
                     */
                    public static create(properties?: com.im.common.packets.IChatRespBody): com.im.common.packets.ChatRespBody;

                    /**
                     * Encodes the specified ChatRespBody message. Does not implicitly {@link com.im.common.packets.ChatRespBody.verify|verify} messages.
                     * @param message ChatRespBody message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.im.common.packets.IChatRespBody, writer?: protobuf.Writer): protobuf.Writer;

                    /**
                     * Encodes the specified ChatRespBody message, length delimited. Does not implicitly {@link com.im.common.packets.ChatRespBody.verify|verify} messages.
                     * @param message ChatRespBody message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.im.common.packets.IChatRespBody, writer?: protobuf.Writer): protobuf.Writer;

                    /**
                     * Decodes a ChatRespBody message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChatRespBody
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.im.common.packets.ChatRespBody;

                    /**
                     * Decodes a ChatRespBody message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChatRespBody
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.im.common.packets.ChatRespBody;

                    /**
                     * Verifies a ChatRespBody message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);
                }
            }
        }
    }
}
