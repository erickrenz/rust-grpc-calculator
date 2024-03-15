use std::error::Error;
use std::{env, path::PathBuf};

fn main() -> Result<(), Box<dyn Error>> {
    let outdir = PathBuf::from(env::var("OUT_DIR")?);

    tonic_build::configure()
        .file_descriptor_set_path(outdir.join("calculator_descriptor.bin"))
        .compile(&["proto/calculator.proto"], &["proto"])?;

    tonic_build::compile_protos("proto/calculator.proto")?;

    Ok(())
}
