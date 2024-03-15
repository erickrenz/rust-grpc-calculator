# rust-tonic-calculator 

## Build

```bash
sudo dnf install protobuf
```
```bash
cargo run --bin server
```
```bash
cargo run --bin client
```

## Website

```bash
cd web/
npm i
npm run dev
```

## Resources

- Video: [YouTube](https://www.youtube.com/watch?v=kerKXChDmsE)
- `grpcurl` cli 
```bash
go install github.com/fullstorydev/grpcurl/cmd/grpcurl@latest
```
```bash
grpcurl -plaintext -d '{"a": 2, "b": 3}' \
    '[::1]:50051' calculator.Calculator.Add
```
```bash
grpcurl -plaintext '[::1]:50051' calculator.Admin.GetRequestCount
```
```bash
grpcurl -plaintext -emit-defaults \
    -H "Authorization: Bearer some-secret-token" \
    '[::1]:50051' calculator.Admin.GetRequestCount
```
