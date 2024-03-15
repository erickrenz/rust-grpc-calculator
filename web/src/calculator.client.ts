// @generated by protobuf-ts 2.9.3
// @generated from protobuf file "calculator.proto" (package "calculator", syntax proto3)
// tslint:disable
import { Admin } from "./calculator";
import type { CounterResponse } from "./calculator";
import type { GetCountRequest } from "./calculator";
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Calculator } from "./calculator";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { CalculationResponse } from "./calculator";
import type { CalculationRequest } from "./calculator";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service calculator.Calculator
 */
export interface ICalculatorClient {
    /**
     * @generated from protobuf rpc: Add(calculator.CalculationRequest) returns (calculator.CalculationResponse);
     */
    add(input: CalculationRequest, options?: RpcOptions): UnaryCall<CalculationRequest, CalculationResponse>;
    /**
     * @generated from protobuf rpc: Divide(calculator.CalculationRequest) returns (calculator.CalculationResponse);
     */
    divide(input: CalculationRequest, options?: RpcOptions): UnaryCall<CalculationRequest, CalculationResponse>;
}
/**
 * @generated from protobuf service calculator.Calculator
 */
export class CalculatorClient implements ICalculatorClient, ServiceInfo {
    typeName = Calculator.typeName;
    methods = Calculator.methods;
    options = Calculator.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: Add(calculator.CalculationRequest) returns (calculator.CalculationResponse);
     */
    add(input: CalculationRequest, options?: RpcOptions): UnaryCall<CalculationRequest, CalculationResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<CalculationRequest, CalculationResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Divide(calculator.CalculationRequest) returns (calculator.CalculationResponse);
     */
    divide(input: CalculationRequest, options?: RpcOptions): UnaryCall<CalculationRequest, CalculationResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<CalculationRequest, CalculationResponse>("unary", this._transport, method, opt, input);
    }
}
/**
 * @generated from protobuf service calculator.Admin
 */
export interface IAdminClient {
    /**
     * @generated from protobuf rpc: GetRequestCount(calculator.GetCountRequest) returns (calculator.CounterResponse);
     */
    getRequestCount(input: GetCountRequest, options?: RpcOptions): UnaryCall<GetCountRequest, CounterResponse>;
}
/**
 * @generated from protobuf service calculator.Admin
 */
export class AdminClient implements IAdminClient, ServiceInfo {
    typeName = Admin.typeName;
    methods = Admin.methods;
    options = Admin.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: GetRequestCount(calculator.GetCountRequest) returns (calculator.CounterResponse);
     */
    getRequestCount(input: GetCountRequest, options?: RpcOptions): UnaryCall<GetCountRequest, CounterResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetCountRequest, CounterResponse>("unary", this._transport, method, opt, input);
    }
}
