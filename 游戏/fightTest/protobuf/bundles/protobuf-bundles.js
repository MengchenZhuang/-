var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.im = (function() {

        /**
         * Namespace im.
         * @memberof com
         * @namespace
         */
        var im = {};

        im.common = (function() {

            /**
             * Namespace common.
             * @memberof com.im
             * @namespace
             */
            var common = {};

            common.packets = (function() {

                /**
                 * Namespace packets.
                 * @memberof com.im.common
                 * @namespace
                 */
                var packets = {};

                /**
                 * 聊天类型
                 * @name com.im.common.packets.ChatType
                 * @enum {string}
                 * @property {number} CHAT_TYPE_UNKNOW=0 CHAT_TYPE_UNKNOW value
                 * @property {number} CHAT_TYPE_PUBLIC=1 CHAT_TYPE_PUBLIC value
                 * @property {number} CHAT_TYPE_PRIVATE=2 CHAT_TYPE_PRIVATE value
                 */
                packets.ChatType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "CHAT_TYPE_UNKNOW"] = 0;
                    values[valuesById[1] = "CHAT_TYPE_PUBLIC"] = 1;
                    values[valuesById[2] = "CHAT_TYPE_PRIVATE"] = 2;
                    return values;
                })();

                packets.ChatReqBody = (function() {

                    /**
                     * Properties of a ChatReqBody.
                     * @memberof com.im.common.packets
                     * @interface IChatReqBody
                     * @property {number|Long|null} [time] ChatReqBody time
                     * @property {com.im.common.packets.ChatType|null} [type] ChatReqBody type
                     * @property {string|null} [text] ChatReqBody text
                     * @property {string|null} [group] ChatReqBody group
                     * @property {number|null} [toId] ChatReqBody toId
                     * @property {string|null} [toNick] ChatReqBody toNick
                     */

                    /**
                     * Constructs a new ChatReqBody.
                     * @memberof com.im.common.packets
                     * @classdesc 聊天请求
                     * @implements IChatReqBody
                     * @constructor
                     * @param {com.im.common.packets.IChatReqBody=} [properties] Properties to set
                     */
                    function ChatReqBody(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ChatReqBody time.
                     * @member {number|Long} time
                     * @memberof com.im.common.packets.ChatReqBody
                     * @instance
                     */
                    ChatReqBody.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * ChatReqBody type.
                     * @member {com.im.common.packets.ChatType} type
                     * @memberof com.im.common.packets.ChatReqBody
                     * @instance
                     */
                    ChatReqBody.prototype.type = 0;

                    /**
                     * ChatReqBody text.
                     * @member {string} text
                     * @memberof com.im.common.packets.ChatReqBody
                     * @instance
                     */
                    ChatReqBody.prototype.text = "";

                    /**
                     * ChatReqBody group.
                     * @member {string} group
                     * @memberof com.im.common.packets.ChatReqBody
                     * @instance
                     */
                    ChatReqBody.prototype.group = "";

                    /**
                     * ChatReqBody toId.
                     * @member {number} toId
                     * @memberof com.im.common.packets.ChatReqBody
                     * @instance
                     */
                    ChatReqBody.prototype.toId = 0;

                    /**
                     * ChatReqBody toNick.
                     * @member {string} toNick
                     * @memberof com.im.common.packets.ChatReqBody
                     * @instance
                     */
                    ChatReqBody.prototype.toNick = "";

                    /**
                     * Creates a new ChatReqBody instance using the specified properties.
                     * @function create
                     * @memberof com.im.common.packets.ChatReqBody
                     * @static
                     * @param {com.im.common.packets.IChatReqBody=} [properties] Properties to set
                     * @returns {com.im.common.packets.ChatReqBody} ChatReqBody instance
                     */
                    ChatReqBody.create = function create(properties) {
                        return new ChatReqBody(properties);
                    };

                    /**
                     * Encodes the specified ChatReqBody message. Does not implicitly {@link com.im.common.packets.ChatReqBody.verify|verify} messages.
                     * @function encode
                     * @memberof com.im.common.packets.ChatReqBody
                     * @static
                     * @param {com.im.common.packets.IChatReqBody} message ChatReqBody message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ChatReqBody.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.time != null && message.hasOwnProperty("time"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.time);
                        if (message.type != null && message.hasOwnProperty("type"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                        if (message.text != null && message.hasOwnProperty("text"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.text);
                        if (message.group != null && message.hasOwnProperty("group"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.group);
                        if (message.toId != null && message.hasOwnProperty("toId"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.toId);
                        if (message.toNick != null && message.hasOwnProperty("toNick"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.toNick);
                        return writer;
                    };

                    /**
                     * Encodes the specified ChatReqBody message, length delimited. Does not implicitly {@link com.im.common.packets.ChatReqBody.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.im.common.packets.ChatReqBody
                     * @static
                     * @param {com.im.common.packets.IChatReqBody} message ChatReqBody message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ChatReqBody.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ChatReqBody message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.im.common.packets.ChatReqBody
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.im.common.packets.ChatReqBody} ChatReqBody
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ChatReqBody.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.im.common.packets.ChatReqBody();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.time = reader.int64();
                                break;
                            case 2:
                                message.type = reader.int32();
                                break;
                            case 3:
                                message.text = reader.string();
                                break;
                            case 4:
                                message.group = reader.string();
                                break;
                            case 5:
                                message.toId = reader.int32();
                                break;
                            case 6:
                                message.toNick = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ChatReqBody message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.im.common.packets.ChatReqBody
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.im.common.packets.ChatReqBody} ChatReqBody
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ChatReqBody.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ChatReqBody message.
                     * @function verify
                     * @memberof com.im.common.packets.ChatReqBody
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ChatReqBody.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.time != null && message.hasOwnProperty("time"))
                            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                                return "time: integer|Long expected";
                        if (message.type != null && message.hasOwnProperty("type"))
                            switch (message.type) {
                            default:
                                return "type: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        if (message.text != null && message.hasOwnProperty("text"))
                            if (!$util.isString(message.text))
                                return "text: string expected";
                        if (message.group != null && message.hasOwnProperty("group"))
                            if (!$util.isString(message.group))
                                return "group: string expected";
                        if (message.toId != null && message.hasOwnProperty("toId"))
                            if (!$util.isInteger(message.toId))
                                return "toId: integer expected";
                        if (message.toNick != null && message.hasOwnProperty("toNick"))
                            if (!$util.isString(message.toNick))
                                return "toNick: string expected";
                        return null;
                    };

                    return ChatReqBody;
                })();

                packets.ChatRespBody = (function() {

                    /**
                     * Properties of a ChatRespBody.
                     * @memberof com.im.common.packets
                     * @interface IChatRespBody
                     * @property {number|Long|null} [time] ChatRespBody time
                     * @property {com.im.common.packets.ChatType|null} [type] ChatRespBody type
                     * @property {string|null} [text] ChatRespBody text
                     * @property {number|null} [fromId] ChatRespBody fromId
                     * @property {string|null} [fromNick] ChatRespBody fromNick
                     * @property {number|null} [toId] ChatRespBody toId
                     * @property {string|null} [toNick] ChatRespBody toNick
                     * @property {string|null} [group] ChatRespBody group
                     */

                    /**
                     * Constructs a new ChatRespBody.
                     * @memberof com.im.common.packets
                     * @classdesc 聊天响应
                     * @implements IChatRespBody
                     * @constructor
                     * @param {com.im.common.packets.IChatRespBody=} [properties] Properties to set
                     */
                    function ChatRespBody(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ChatRespBody time.
                     * @member {number|Long} time
                     * @memberof com.im.common.packets.ChatRespBody
                     * @instance
                     */
                    ChatRespBody.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * ChatRespBody type.
                     * @member {com.im.common.packets.ChatType} type
                     * @memberof com.im.common.packets.ChatRespBody
                     * @instance
                     */
                    ChatRespBody.prototype.type = 0;

                    /**
                     * ChatRespBody text.
                     * @member {string} text
                     * @memberof com.im.common.packets.ChatRespBody
                     * @instance
                     */
                    ChatRespBody.prototype.text = "";

                    /**
                     * ChatRespBody fromId.
                     * @member {number} fromId
                     * @memberof com.im.common.packets.ChatRespBody
                     * @instance
                     */
                    ChatRespBody.prototype.fromId = 0;

                    /**
                     * ChatRespBody fromNick.
                     * @member {string} fromNick
                     * @memberof com.im.common.packets.ChatRespBody
                     * @instance
                     */
                    ChatRespBody.prototype.fromNick = "";

                    /**
                     * ChatRespBody toId.
                     * @member {number} toId
                     * @memberof com.im.common.packets.ChatRespBody
                     * @instance
                     */
                    ChatRespBody.prototype.toId = 0;

                    /**
                     * ChatRespBody toNick.
                     * @member {string} toNick
                     * @memberof com.im.common.packets.ChatRespBody
                     * @instance
                     */
                    ChatRespBody.prototype.toNick = "";

                    /**
                     * ChatRespBody group.
                     * @member {string} group
                     * @memberof com.im.common.packets.ChatRespBody
                     * @instance
                     */
                    ChatRespBody.prototype.group = "";

                    /**
                     * Creates a new ChatRespBody instance using the specified properties.
                     * @function create
                     * @memberof com.im.common.packets.ChatRespBody
                     * @static
                     * @param {com.im.common.packets.IChatRespBody=} [properties] Properties to set
                     * @returns {com.im.common.packets.ChatRespBody} ChatRespBody instance
                     */
                    ChatRespBody.create = function create(properties) {
                        return new ChatRespBody(properties);
                    };

                    /**
                     * Encodes the specified ChatRespBody message. Does not implicitly {@link com.im.common.packets.ChatRespBody.verify|verify} messages.
                     * @function encode
                     * @memberof com.im.common.packets.ChatRespBody
                     * @static
                     * @param {com.im.common.packets.IChatRespBody} message ChatRespBody message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ChatRespBody.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.time != null && message.hasOwnProperty("time"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.time);
                        if (message.type != null && message.hasOwnProperty("type"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                        if (message.text != null && message.hasOwnProperty("text"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.text);
                        if (message.fromId != null && message.hasOwnProperty("fromId"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.fromId);
                        if (message.fromNick != null && message.hasOwnProperty("fromNick"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.fromNick);
                        if (message.toId != null && message.hasOwnProperty("toId"))
                            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.toId);
                        if (message.toNick != null && message.hasOwnProperty("toNick"))
                            writer.uint32(/* id 7, wireType 2 =*/58).string(message.toNick);
                        if (message.group != null && message.hasOwnProperty("group"))
                            writer.uint32(/* id 8, wireType 2 =*/66).string(message.group);
                        return writer;
                    };

                    /**
                     * Encodes the specified ChatRespBody message, length delimited. Does not implicitly {@link com.im.common.packets.ChatRespBody.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.im.common.packets.ChatRespBody
                     * @static
                     * @param {com.im.common.packets.IChatRespBody} message ChatRespBody message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ChatRespBody.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ChatRespBody message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.im.common.packets.ChatRespBody
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.im.common.packets.ChatRespBody} ChatRespBody
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ChatRespBody.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.im.common.packets.ChatRespBody();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.time = reader.int64();
                                break;
                            case 2:
                                message.type = reader.int32();
                                break;
                            case 3:
                                message.text = reader.string();
                                break;
                            case 4:
                                message.fromId = reader.int32();
                                break;
                            case 5:
                                message.fromNick = reader.string();
                                break;
                            case 6:
                                message.toId = reader.int32();
                                break;
                            case 7:
                                message.toNick = reader.string();
                                break;
                            case 8:
                                message.group = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ChatRespBody message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.im.common.packets.ChatRespBody
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.im.common.packets.ChatRespBody} ChatRespBody
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ChatRespBody.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ChatRespBody message.
                     * @function verify
                     * @memberof com.im.common.packets.ChatRespBody
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ChatRespBody.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.time != null && message.hasOwnProperty("time"))
                            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                                return "time: integer|Long expected";
                        if (message.type != null && message.hasOwnProperty("type"))
                            switch (message.type) {
                            default:
                                return "type: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        if (message.text != null && message.hasOwnProperty("text"))
                            if (!$util.isString(message.text))
                                return "text: string expected";
                        if (message.fromId != null && message.hasOwnProperty("fromId"))
                            if (!$util.isInteger(message.fromId))
                                return "fromId: integer expected";
                        if (message.fromNick != null && message.hasOwnProperty("fromNick"))
                            if (!$util.isString(message.fromNick))
                                return "fromNick: string expected";
                        if (message.toId != null && message.hasOwnProperty("toId"))
                            if (!$util.isInteger(message.toId))
                                return "toId: integer expected";
                        if (message.toNick != null && message.hasOwnProperty("toNick"))
                            if (!$util.isString(message.toNick))
                                return "toNick: string expected";
                        if (message.group != null && message.hasOwnProperty("group"))
                            if (!$util.isString(message.group))
                                return "group: string expected";
                        return null;
                    };

                    return ChatRespBody;
                })();

                return packets;
            })();

            return common;
        })();

        return im;
    })();

    return com;
})();